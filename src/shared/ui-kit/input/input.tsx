import { TextField, TextFieldProps } from '@mui/material';
import { forwardRef } from 'react';

export { TextField } from '@mui/material';

export const Input = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => (
  <TextField inputRef={ref} {...props} />
));
