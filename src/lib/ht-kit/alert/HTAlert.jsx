import React from 'react';
import './HTAlert.scss';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const HTAlert = ({
  onClose,
  open,
  message,
  autoHideDuration,
  onClick
}) => <div>
  <Snackbar
    open={open}
    autoHideDuration={autoHideDuration}
    onClose={onClose}
    message={message}
    onClick={onClick}
    action={[
      <IconButton key="close" onClick={onClick}>
        <CloseIcon />
      </IconButton>
    ]}
  />
</div>

export default HTAlert;