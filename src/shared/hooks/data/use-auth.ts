import { getSession } from '@/shared/api/auth';
import { QUERY_KEYS } from '@/shared/constants/query-keys';
import { useQuery } from '@tanstack/react-query';

export const useAuth = () => {
  // const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QUERY_KEYS.AUTH],
    queryFn: getSession,
  });

  // useEffect(() => {
  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((_, session) => {
  //     queryClient.setQueryData([QUERY_KEYS.AUTH], session ?? null);
  //   });

  //   return subscription.unsubscribe;
  // }, []);

  return { session: data, isLoading, isError, error };
};
