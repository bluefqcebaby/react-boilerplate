import {
  Button as MUIButton,
  ButtonProps,
  dividerClasses,
} from '@mui/material';
import { FC } from 'react';

export const Button: FC<ButtonProps> = ({
  variant = 'contained',
  ...props
}) => {
  return <MUIButton variant={variant} {...props} />;
};
