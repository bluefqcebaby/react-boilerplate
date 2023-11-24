import { Link, Outlet } from 'react-router-dom';
import './app.css';

export const App = () => {
  return (
    <>
      <h1 className="text-red-500 mb-5 text-3xl">MainPage</h1>
      <div className="flex flex-col">
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </div>

      <div className="border-red-500 border">
        <Outlet />
      </div>
    </>
  );
};
