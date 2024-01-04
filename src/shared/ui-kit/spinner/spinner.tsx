import {
  CircularProgress as MUICircullarProgress,
  CircularProgressProps,
} from '@mui/material';
import { FC } from 'react';

interface IProps extends CircularProgressProps {
  type?: 'full-page' | 'built-in' | 'independent';
}

export const Spinner: FC<IProps> = ({ type = 'independent', ...props }) => {
  const circullarProgress = <MUICircullarProgress {...props} />;

  switch (true) {
    case type === 'full-page':
      return (
        <div className="flex justify-center items-center w-full h-screen">
          {circullarProgress}
        </div>
      );
    case type === 'built-in':
      return (
        <div className="flex justify-center items-center w-full h-full">
          {circullarProgress}
        </div>
      );
    case type === 'independent':
      return <>{circullarProgress}</>;
  }
};
