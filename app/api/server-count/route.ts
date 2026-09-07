import { NextResponse } from 'next/server';
import { getSupabaseServerClient } from '../../lib/supabase';

export async function GET() {
  let data: { server_count: number } | null;
  let error: unknown;

  try {
    ({ data, error } = await getSupabaseServerClient()
      .from('server_stats')
      .select('server_count')
      .single());
  } catch {
    return NextResponse.json({ error: 'Failed to fetch server count' }, { status: 500 });
  }
  
  if (error || !data) {
    return NextResponse.json({ error: 'Failed to fetch server count' }, { status: 500 });
  }
  
  return NextResponse.json(
    { count: data.server_count },
    { headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600' } }
  );
}
