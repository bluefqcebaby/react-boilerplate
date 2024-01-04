import { ITodo } from '@/shared/types/todo';
import { supabase } from '..';

export const updateTodo = async (todo: ITodo) => {
  const { data, error } = await supabase
    .from('todos')
    .update({ is_completed: todo.isCompleted, name: todo.name })
    .eq('id', todo.id);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
