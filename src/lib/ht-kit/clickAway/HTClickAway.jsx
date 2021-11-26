import React from 'react';
import { ClickAwayListener } from '@material-ui/core';

const HTClickAway = ({ children, onClickAway }) => (
  <ClickAwayListener onClickAway={onClickAway}>
    {children}
  </ClickAwayListener>
);

export default HTClickAway;
