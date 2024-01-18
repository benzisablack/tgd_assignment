import { Dialog, DialogTitle } from '@mui/material';

interface CustomDialogProps {
  open: boolean;
  message: string;
  handleClose: () => void;
}

export default function CustomDialog({ open, message, handleClose }: CustomDialogProps) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{message}</DialogTitle>
    </Dialog>
  );
}
