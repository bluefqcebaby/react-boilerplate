import sx from 'classnames';
import { useTranslation } from 'react-i18next';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Typography } from '@mui/material';
import { getTodos } from '@/shared/api/todos/get-todos';
import { QUERY_KEYS } from '@/shared/constants/query-keys';
import { withAuth } from '@/shared/lib/hocs/withAuth';
import * as UI from '@/shared/ui-kit';
import { AddTodo } from '@/features/add-todo';
import { updateTodo } from '@/shared/api/todos/update-todo';
import { ITodo } from '@/shared/types/todo';
import { useRealtime } from '../helpers/use-realtime';

const TodoListPage = () => {
  const { t } = useTranslation(['app'], { keyPrefix: 'todo' });

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.GET_TODOS],
    queryFn: getTodos,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: updateTodo,
    onMutate: (newTodo) => {
      const previousTodos = queryClient.getQueryData([QUERY_KEYS.GET_TODOS]) as ITodo[];

      queryClient.setQueryData([QUERY_KEYS.GET_TODOS], (old: ITodo[]) =>
        old.map((elem) => (elem.id === newTodo.id ? newTodo : elem)),
      );

      return { previousTodos };
    },

    onError: (err, newTodo, context) => {
      queryClient.setQueryData([QUERY_KEYS.GET_TODOS], context?.previousTodos);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_TODOS] });
    },
  });

  const renderContent = () => {
    if (isLoading) {
      return <UI.Spinner type="built-in" />;
    }

    if (!data?.length) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <Typography variant="subtitle1">{t('empty')}</Typography>
          <AddTodo />
        </div>
      );
    }

    return (
      <div className="relative">
        <div className="flex gap-3 flex-wrap">
          {data.map((todo) => (
            <UI.FormControlLabel
              key={todo.id}
              className={sx('border p-3 rounded-xl items-center', {
                'line-through': todo.isCompleted,
              })}
              control={
                <UI.Checkbox
                  checked={todo.isCompleted}
                  disabled={isPending}
                  onChange={(e) => mutate({ ...todo, isCompleted: e.target.checked })}
                />
              }
              label={todo.name}
              labelPlacement="top"
            />
          ))}
        </div>
        <AddTodo className="mt-5" />
      </div>
    );
  };

  useRealtime();

  return <div className="h-full">{renderContent()}</div>;
};

export default withAuth(TodoListPage);
