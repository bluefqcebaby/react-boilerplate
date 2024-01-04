import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  ModalProps,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FC } from 'react';

interface IProps extends ModalProps {
  onClose: () => void;
}

export const Modal: FC<IProps> = ({ title, onClose, children, ...props }) => {
  return (
    <Dialog {...props}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <DialogTitle
            sx={{
              padding: 0,
            }}
          >
            {title}
          </DialogTitle>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <DialogContent
          className="w-96"
          sx={{
            padding: 0,
          }}
        >
          {children}
        </DialogContent>
      </div>
    </Dialog>
  );
};
