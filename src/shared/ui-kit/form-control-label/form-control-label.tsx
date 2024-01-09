import { FormControlLabelProps, FormControlLabel as MUIFormControlLabel } from '@mui/material';
import { FC } from 'react';

export const FormControlLabel: FC<FormControlLabelProps> = (props) => <MUIFormControlLabel {...props} sx={{ ml: 0 }} />;
