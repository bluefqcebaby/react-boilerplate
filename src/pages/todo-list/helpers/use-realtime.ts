import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { supabase } from '@/shared/api';
import { QUERY_KEYS } from '@/shared/constants/query-keys';
import { ITodo } from '@/shared/types/todo';

export const useRealtime = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    supabase
      .channel('todos')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'todos' }, (payload) => {
        toast.info('Realtime update!');
        queryClient.setQueryData([QUERY_KEYS.GET_TODOS], (old: ITodo[]) => [...old, payload.new]);
      })
      .subscribe();
  }, []);
};
