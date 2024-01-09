import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginSchema } from '../constants/login-scheme';
import { LoginSchemaType } from '../types';
import * as UI from '@/shared/ui-kit';
import { signIn } from '@/shared/api/auth/sign-in';
import { QUERY_KEYS } from '@/shared/constants/query-keys';
import { withoutAuth } from '@/shared/lib/hocs/withoutAuth';

const Login = () => {
  const { t } = useTranslation(['app'], { keyPrefix: 'login_form' });
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEYS.AUTH], data.session);
    },
  });

  const { control, handleSubmit } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <div className="h-screen w-full items-center justify-center flex">
      <form className="flex flex-col gap-3 w-96" onSubmit={handleSubmit((data) => mutate(data))}>
        <UI.Text variant="h5">{t('title')}</UI.Text>
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <UI.Input {...field} error={!!fieldState.error} helperText={fieldState.error?.message} label={t('email')} />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field, fieldState }) => (
            <UI.Input
              {...field}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              label={t('password')}
              type="password"
            />
          )}
        />
        <UI.Button isLoading={isPending} type="submit">
          Войти
        </UI.Button>
      </form>
    </div>
  );
};

export default withoutAuth(Login);
