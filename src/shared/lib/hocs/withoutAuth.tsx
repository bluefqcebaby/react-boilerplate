import { Navigate } from 'react-router-dom';
import React from 'react';
import { ROUTES } from '@/shared/constants/routes';
import { useAuth } from '@/shared/hooks/data';

export const withoutAuth = (Component: React.ComponentType) => () => {
  const { session } = useAuth();

  if (session) {
    return <Navigate to={ROUTES.TODO_LIST.FULL_PATH} />;
  }

  return <Component />;
};
