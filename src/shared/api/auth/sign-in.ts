import { IAuthData } from '@/shared/types/auth';
import { supabase } from '..';

export const signIn = async (data: IAuthData) => {
  const { email, password } = data;

  const result = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (result.error) {
    throw new Error(result.error.message);
  }

  return result.data;
};
