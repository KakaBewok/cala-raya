import { createClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client
 * Use this in server components, server actions, and API routes
 */
export function createSupabaseServerClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  return createClient(supabaseUrl, supabaseKey);
}

