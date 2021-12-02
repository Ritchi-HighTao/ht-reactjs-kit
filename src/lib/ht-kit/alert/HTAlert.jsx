import React, {useState} from 'react';
import './HTAlert.scss';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

const HTAlert = () => {
  const [open, setOpen] = useState(true);
  function handleClose(reason) {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }

  return (
  <div>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        variant="warning"
        message={message}
        action={[
          <IconButton key="close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        ]}
      />
  </div>
  );
};

export default HTAlert;