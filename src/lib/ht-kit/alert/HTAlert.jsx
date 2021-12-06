import React from 'react';
import './HTAlert.scss';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const HTAlert = ({
  onClose,
  open,
  message,
  autoHideDuration,
  severity
}) => <div>
  <Stack spacing={2} sx={{ width: '100%' }}>
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  </Stack>
</div>

export default HTAlert;
