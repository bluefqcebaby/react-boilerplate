import { CircularProgress } from '@mui/material';

export const Spinner = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <CircularProgress />
    </div>
  );
};
