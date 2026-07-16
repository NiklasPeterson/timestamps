import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit } from '../../../lib/rate-limit';

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const MAX_BODY_LENGTH = 8 * 1024;
const MAX_PAGE_LENGTH = 2048;
const MAX_REFERRER_LENGTH = 2048;
const PAGEVIEW_RATE_LIMIT = {
  keyPrefix: 'timestamps-pageview',
  limit: 60,
  windowMs: 60 * 1000,
};

let supabase: SupabaseClient | null = null;

function getSupabase() {
  if (supabase) return supabase;

  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceRoleKey) throw new Error('Supabase is not configured');

  supabase = createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
  return supabase;
}

function isSameOriginRequest(request: NextRequest) {
  const origin = request.headers.get('origin');
  if (!origin) return false;

  try {
    return new URL(origin).origin === new URL(request.url).origin;
  } catch {
    return false;
  }
}

function isValidPage(value: unknown): value is string {
  return typeof value === 'string' && value.startsWith('/') && value.length <= MAX_PAGE_LENGTH;
}

function isValidUuid(value: unknown): value is string {
  return typeof value === 'string' && UUID_PATTERN.test(value);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function normalizeReferrer(value: unknown): string | null {
  if (typeof value !== 'string' || value.length > MAX_BODY_LENGTH) return null;

  try {
    const referrer = new URL(value.trim());
    if (referrer.protocol !== 'http:' && referrer.protocol !== 'https:') return null;

    referrer.search = '';
    referrer.hash = '';
    return referrer.toString().slice(0, MAX_REFERRER_LENGTH);
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  if (!isSameOriginRequest(request)) {
    return NextResponse.json({ error: 'Invalid request origin' }, { status: 403 });
  }

  if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) {
    return NextResponse.json({ error: 'Content-Type must be application/json' }, { status: 415 });
  }

  const contentLength = Number(request.headers.get('content-length'));
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_LENGTH) {
    return NextResponse.json({ error: 'Request body is too large' }, { status: 413 });
  }

  const rateLimit = checkRateLimit(request, PAGEVIEW_RATE_LIMIT);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: 'Too many pageview requests' },
      {
        status: 429,
        headers: {
          'Retry-After': rateLimit.retryAfter.toString(),
          'X-RateLimit-Limit': rateLimit.limit.toString(),
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          'X-RateLimit-Reset': Math.ceil(rateLimit.resetAt / 1000).toString(),
        },
      }
    );
  }

  let payload: unknown;
  try {
    const body = await request.text();
    if (body.length > MAX_BODY_LENGTH) {
      return NextResponse.json({ error: 'Request body is too large' }, { status: 413 });
    }
    payload = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!isRecord(payload)) {
    return NextResponse.json({ error: 'Invalid pageview payload' }, { status: 400 });
  }

  const { page, visitorId, sessionId, referrer } = payload;
  if (!isValidPage(page) || !isValidUuid(visitorId) || !isValidUuid(sessionId)) {
    return NextResponse.json({ error: 'Invalid pageview payload' }, { status: 400 });
  }

  let error: unknown;
  try {
    ({ error } = await getSupabase().from('pageviews').insert({
      page,
      visitor_id: visitorId,
      session_id: sessionId,
      referrer: normalizeReferrer(referrer),
    }));
  } catch {
    return NextResponse.json({ error: 'Failed to track pageview' }, { status: 500 });
  }

  if (error) {
    return NextResponse.json({ error: 'Failed to track pageview' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
