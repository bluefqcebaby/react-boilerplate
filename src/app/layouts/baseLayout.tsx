import { Header } from '@/widgets/header';
import { Outlet } from 'react-router-dom';

export const baseLayout = (
  <div className="flex flex-col h-full">
    <Header />
    <div className="container mt-10 flex-grow">
      <Outlet />
    </div>
  </div>
);
