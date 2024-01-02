import { Outlet, useNavigate } from 'react-router-dom';
import './app.css';
import { useAuth } from '@/shared/hooks/data';
import * as UI from '@/shared/ui-kit';
import { ROUTES } from '@/shared/constants/routes';
import { useEffect } from 'react';

export const AppLayout = () => {
  const { session, isLoading, isError } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!session && !isLoading) {
      navigate(ROUTES.LOGIN.FULL_PATH);
    }
  }, [session, isLoading]);

  if (isLoading) {
    return <UI.Spinner />;
  }

  if (isError) {
    return <h1>Не удалось загрузить сессию. Попробуйте позже.</h1>;
  }

  return <Outlet />;
};
