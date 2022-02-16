import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const HTCheckbox = (props) => {
  const {
    onChange,
    checked
  } = props;

  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
    />);
};

export default HTCheckbox;
