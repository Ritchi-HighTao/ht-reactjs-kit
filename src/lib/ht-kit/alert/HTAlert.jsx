import React from 'react';
import './HTAlert.scss';
import { Alert, Snackbar, Stack } from "@mui/material";

const HTAlert = ({
  onClose,
  open,
  message,
  autoHideDuration,
  sevirity
}) => <div>
  <Stack spacing={2} sx={{ width: "100%" }}>
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={sevirity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  </Stack>
</div>

export default HTAlert;