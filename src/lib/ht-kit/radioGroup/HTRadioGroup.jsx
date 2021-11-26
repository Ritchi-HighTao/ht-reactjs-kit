import React from 'react';
import { FormControl, FormControlLabel, RadioGroup } from '@material-ui/core';
import './HTRadioGroup.scss';
import HTRadioButton from '../radio/HTRadioButton';

const HTRadioGroup = ({ values, defaultValue }) => (
  <FormControl component="fieldset">
    <RadioGroup defaultValue={defaultValue}>
      {values.map((item) => (
        <FormControlLabel
          key={item}
          className="ht-radio-form-label"
          value={item}
          control={<HTRadioButton />}
        />
      ))}
    </RadioGroup>
  </FormControl>
);

export default HTRadioGroup;
