import { lazy } from 'react';

export const LazyLoginPage = lazy(() => delayForDemo(import('./login')));

function delayForDemo(promise: Promise<any>) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
