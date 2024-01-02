import { supabase } from '..';

export const getSession = async () => {
  await new Promise((res) => setTimeout(res, 3000));

  const result = await supabase.auth.getSession();

  if (result.error) {
    throw new Error(result.error.message);
  }

  return result.data?.session;
};
