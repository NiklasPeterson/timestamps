import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function GET() {
  const { data, error } = await supabase
    .from('pageviews')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
  }

  // Calculate metrics
  const uniqueVisitors = new Set(data.map(pv => pv.visitor_id)).size;
  const totalPageviews = data.length;

  return NextResponse.json({
    uniqueVisitors,
    totalPageviews,
  });
}