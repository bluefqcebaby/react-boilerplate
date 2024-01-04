import { Tables } from '@/shared/types/database';
import { ITodo } from '@/shared/types/todo';

export const mapDbTodoType = (todos: Tables<'todos'>[]): ITodo[] =>
  todos.map((elem) => ({
    id: elem.id,
    createdAt: elem.created_at,
    isCompleted: elem.is_completed,
    name: elem.name,
    userId: elem.user_id,
  }));
