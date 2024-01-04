import { supabase } from '..';

export const getSession = async () => {
  const result = await supabase.auth.getSession();

  if (result.error) {
    throw new Error(result.error.message);
  }

  return result.data?.session;
};
