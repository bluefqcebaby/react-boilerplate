import { CheckboxProps, Checkbox as MUICheckbox } from '@mui/material';
import { forwardRef } from 'react';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    return <MUICheckbox inputRef={ref} {...props} />;
  },
);
