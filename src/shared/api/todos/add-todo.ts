import { ITodoDTO } from '@/shared/types/todo';
import { supabase } from '..';

export const addTodo = async (todo: ITodoDTO) => {
  const { data, error } = await supabase
    .from('todos')
    .insert({
      name: todo.name,
      user_id: todo.userId,
    })
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
