import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://your-project-url.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY || 'your-public-api-key';

export const supabase = createClient(supabaseUrl, supabaseKey);