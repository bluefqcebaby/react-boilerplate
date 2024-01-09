import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/header';

export const baseLayout = (
  <div className="flex flex-col h-full">
    <Header />
    <div className="container mt-10 flex-grow">
      <Outlet />
    </div>
  </div>
);
