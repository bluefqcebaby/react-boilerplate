import { mapDbTodoType } from '@/shared/lib/mappers/mapDbTodo';
import { supabase } from '..';

export const getTodos = async () => {
  const { data, error } = await supabase.from('todos').select('*').order('created_at');

  if (error) {
    throw new Error(error.message);
  }

  return mapDbTodoType(data);
};
