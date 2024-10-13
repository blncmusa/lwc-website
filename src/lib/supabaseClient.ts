import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.REACT_APP_SUPABASE_URL || 'https://your-project-url.supabase.co';
const supabaseKey = import.meta.env.REACT_APP_SUPABASE_KEY || 'your-public-api-key';

export const supabase = createClient(supabaseUrl, supabaseKey);