import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const HTRadioButton = (props) => {
  const {
    onChange,
    value,
    label
  } = props;

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        onChange={onChange}
      >
        <FormControlLabel value={value} control={<Radio />} label={label} />
      </RadioGroup>
    </FormControl>
  );
};

export default HTRadioButton;
