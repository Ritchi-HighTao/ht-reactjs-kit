import React from 'react';
import { Icon, IconButton } from '@material-ui/core';
import './HTFloatingButton.scss';

const HTFloatingButton = ({ icon, onClick, size }) => (
  <IconButton size={size} onClick={onClick}>
    <Icon>{icon}</Icon>
  </IconButton>
);

export default HTFloatingButton;
