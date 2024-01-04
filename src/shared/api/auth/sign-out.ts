import { supabase } from '..';

export const signOut = async () => {
  const result = await supabase.auth.signOut();

  if (result.error) {
    throw new Error(result.error.message);
  }

  return true;
};
