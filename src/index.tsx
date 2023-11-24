import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { routes } from './app/routes';

const root = createRoot(document.getElementById('root'));

root.render(<RouterProvider router={routes} />);
