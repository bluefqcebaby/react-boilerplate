import { Outlet, useNavigate } from 'react-router-dom';
import './app.css';
import { useAuth } from '@/shared/hooks/data';
import * as UI from '@/shared/ui-kit';
import { ROUTES } from '@/shared/constants/routes';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const App = () => {
  const { session, isLoading, isError } = useAuth();
  const { t } = useTranslation();

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
    return <h1>{t('common.no_session')}</h1>;
  }

  return <Outlet />;
};
