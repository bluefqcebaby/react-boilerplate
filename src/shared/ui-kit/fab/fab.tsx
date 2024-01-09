import { Fab as MuiFab, FabProps } from '@mui/material';
import { FC } from 'react';
import { Spinner } from '../spinner';

interface IProps extends FabProps {
  isLoading?: boolean;
}

export const Fab: FC<IProps> = ({ isLoading, children, ...props }) => (
  <MuiFab disabled={isLoading} {...props}>
    {isLoading ? <Spinner /> : children}
  </MuiFab>
);
