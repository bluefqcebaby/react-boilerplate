import { ROUTES } from '@/shared/constants/routes';
import { useAuth } from '@/shared/hooks/data';
import { Navigate } from 'react-router-dom';

export const withAuth = (Component: React.ComponentType) => {
  return () => {
    const { session } = useAuth();

    if (!session) {
      return <Navigate to={ROUTES.LOGIN.FULL_PATH} />;
    }

    return <Component />;
  };
};
