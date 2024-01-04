import { Dispatch, FC, SetStateAction } from 'react';
import * as UI from '@/shared/ui-kit';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { addTodoValidationSchema } from '../constants';
import { AddTodoSchemaType } from '../types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTodo } from '@/shared/api/todos/add-todo';
import { QUERY_KEYS } from '@/shared/constants/query-keys';
import { Session } from '@supabase/supabase-js';

interface IProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

export const AddTodoModal: FC<IProps> = ({ isVisible, setIsVisible }) => {
  const { t } = useTranslation(['app'], { keyPrefix: 'todo' });

  const queryClient = useQueryClient();

  const session = queryClient.getQueryData([QUERY_KEYS.AUTH]) as Session;

  const handleClose = () => {
    setIsVisible(false);
    reset();
  };

  const { mutate, isPending } = useMutation({
    mutationFn: addTodo,
    onSuccess: handleClose,
  });

  const { control, handleSubmit, reset } = useForm<AddTodoSchemaType>({
    mode: 'onSubmit',
    resolver: zodResolver(addTodoValidationSchema),
    defaultValues: {
      title: '',
    },
  });

  return (
    <UI.Modal onClose={handleClose} open={isVisible} title={t('add')}>
      <form
        className="py-2 flex flex-col gap-2"
        onSubmit={handleSubmit((data) =>
          mutate({ name: data.title, userId: session.user.id }),
        )}
      >
        <Controller
          control={control}
          name="title"
          render={({ field, fieldState }) => (
            <UI.Input
              {...field}
              error={!!fieldState.error?.message}
              helperText={fieldState.error?.message}
              label={t('todo_name')}
            />
          )}
        />
        <UI.Button isLoading={isPending} type="submit">
          {t('add')}
        </UI.Button>
      </form>
    </UI.Modal>
  );
};
