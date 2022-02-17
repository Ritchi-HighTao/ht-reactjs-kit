import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const HTCheckbox = (props) => {
  const {
    label,
    onChange,
    checked
  } = props;

  return (
    <Checkbox
      label={label}
      checked={checked}
      onChange={onChange}
    />);
};

export default HTCheckbox;
