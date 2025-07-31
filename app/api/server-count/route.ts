import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  const { data, error } = await supabase
    .from('server_stats')
    .select('server_count')
    .single();
  
  if (error) {
    return NextResponse.json({ error: 'Failed to fetch server count' }, { status: 500 });
  }
  
  return NextResponse.json({ count: data.server_count });
}