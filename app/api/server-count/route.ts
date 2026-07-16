import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

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

export async function GET() {
  let data: { server_count: number } | null;
  let error: unknown;

  try {
    ({ data, error } = await getSupabase()
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
