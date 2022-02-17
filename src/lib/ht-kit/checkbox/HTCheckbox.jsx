import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel } from '@material-ui/core';

const HTCheckbox = (props) => {
  const {
    label,
    onChange,
    checked
  } = props;

  return (
    <FormControlLabel
      label={label}
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
        />
      }
    />
  );
};

export default HTCheckbox;
