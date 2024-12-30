import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function POST(request: NextRequest) {
  const { page, visitorId, sessionId } = await request.json();

  const { error } = await supabase
    .from('pageviews')
    .insert({
      page,
      visitor_id: visitorId,
      session_id: sessionId
    });

  if (error) {
    return NextResponse.json({ error: 'Failed to track pageview' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}