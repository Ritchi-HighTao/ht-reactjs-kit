import React from 'react';
import './HTAlert.scss';
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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