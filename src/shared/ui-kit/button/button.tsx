import { Button as MUIButton, ButtonProps } from '@mui/material';
import { FC } from 'react';
import { Spinner } from '../spinner';

interface IProps extends ButtonProps {
  isLoading?: boolean;
}

export const Button: FC<IProps> = ({ variant = 'contained', isLoading, children, ...props }) => (
  <MUIButton className="h-14" disabled={isLoading} variant={variant} {...props}>
    {isLoading ? <Spinner /> : children}
  </MUIButton>
);
