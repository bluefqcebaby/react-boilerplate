import { Navigate, createBrowserRouter } from 'react-router-dom';
import { App } from './app';
import { PropsWithChildren, Suspense } from 'react';
import { ROUTES } from '@/shared/constants/routes';
import { LazyLoginPage } from '@/pages/login';
import * as UI from '@/shared/ui-kit';
import { baseLayout } from './layouts/baseLayout';
import { LazyTodoList } from '@/pages/todo-list';

const SuspenseWrapper = (props: PropsWithChildren) => {
  return <Suspense fallback={<UI.Spinner type="full-page" />} {...props} />;
};

export const routes = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to={ROUTES.TODO_LIST.FULL_PATH} />,
      },
      {
        element: baseLayout,
        children: [
          {
            path: ROUTES.TODO_LIST.FULL_PATH,
            element: (
              <SuspenseWrapper>
                <LazyTodoList />
              </SuspenseWrapper>
            ),
          },
        ],
      },
      {
        path: ROUTES.LOGIN.FULL_PATH,
        element: (
          <SuspenseWrapper>
            <LazyLoginPage />
          </SuspenseWrapper>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <div>404</div>,
  },
]);
