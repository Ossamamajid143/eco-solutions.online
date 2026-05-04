import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

const isConfigured = supabaseUrl && supabaseUrl.startsWith('http') && supabaseAnonKey

export const supabase = isConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : ({
      from: () => ({
        select: () => ({
          eq: () => ({
            single: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
          }),
          select: () => Promise.resolve({ data: null, error: { message: 'Supabase not configured' } }),
        }),
      }),
    } as any)
