import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/database';

export const supabase = createClient<Database>(
  __SUPABASE_URL__,
  process.env.SUPABASE_API_KEY!,
);
