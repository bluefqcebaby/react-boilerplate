import { Navigate, createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './app-layout';
import { Suspense } from 'react';
import { ROUTES } from '@/shared/constants/routes';
import { LazyLoginPage } from '@/pages/login';
import * as UI from '@/shared/ui-kit';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to={ROUTES.TODO_LIST.FULL_PATH} replace />,
      },
      {
        path: 'todo-list',
        element: <div>todo list</div>,
      },
      {
        path: ROUTES.LOGIN.PATH,
        element: (
          <Suspense fallback={<UI.Spinner />}>
            <LazyLoginPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <div>404</div>,
  },
]);
