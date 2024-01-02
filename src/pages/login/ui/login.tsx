import * as UI from '@/shared/ui-kit';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../constants/login-scheme';
import { LoginSchemaType } from '../types';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation(['app'], { keyPrefix: 'login_form' });

  const { control, handleSubmit } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: LoginSchemaType) => {};

  return (
    <div className="h-screen w-full items-center justify-center flex">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 w-96"
      >
        <UI.Text variant="h5">{t('title')}</UI.Text>
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <UI.Input {...field} label={t('email')} />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field, fieldState }) => (
            <UI.Input {...field} type="password" label={t('password')} />
          )}
        />
        <UI.Button type="submit">Войти</UI.Button>
      </form>
    </div>
  );
};

export default Login;
