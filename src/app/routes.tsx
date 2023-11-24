import { createBrowserRouter } from 'react-router-dom';
import { App } from './app';
import { Suspense } from 'react';
import { LazyProfile } from '../pages/profile';
import { LazyAbout } from '@/pages/about';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'about',
        element: (
          <Suspense fallback="Loading...">
            <LazyAbout />
          </Suspense>
        ),
      },
      {
        path: 'profile',
        element: (
          <Suspense fallback="Loading...">
            <LazyProfile />
          </Suspense>
        ),
      },
    ],
  },
]);
