import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseServerClient } from '../../../lib/supabase';

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const MAX_BODY_LENGTH = 8 * 1024;
const MAX_PAGE_LENGTH = 2048;
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

function isPageviewPayload(value: Record<string, unknown>) {
  const keys = Object.keys(value);
  return (
    keys.length === 2 &&
    keys.includes('page') &&
    keys.includes('visitorId') &&
    isValidPage(value.page) &&
    isValidUuid(value.visitorId)
  );
}

export async function POST(request: NextRequest) {
  if (process.env.ANALYTICS_ENABLED !== 'true') {
    return NextResponse.json({ error: 'Analytics is disabled' }, { status: 503 });
  }

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

  if (!isRecord(payload) || !isPageviewPayload(payload)) {
    return NextResponse.json({ error: 'Invalid pageview payload' }, { status: 400 });
  }

  const { page, visitorId } = payload;

  let error: unknown;
  try {
    ({ error } = await getSupabaseServerClient().from('pageviews').insert({
      page,
      visitor_id: visitorId,
      session_id: visitorId,
    }));
  } catch {
    return NextResponse.json({ error: 'Failed to track pageview' }, { status: 500 });
  }

  if (error) {
    return NextResponse.json({ error: 'Failed to track pageview' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
