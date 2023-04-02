import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://laicjuordudizaoukukg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhaWNqdW9yZHVkaXphb3VrdWtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxMzI5MzgsImV4cCI6MTk5MzcwODkzOH0.6RVFmMqlii7oCPwuLFHfzOzbAfWtDtFzFDh9dN8jpmM'

export const supabase = createClient(supabaseUrl, supabaseKey)