import React from 'react';
import { Radio } from '@material-ui/core';
import './HTRadioButton.scss';

const HTRadioButton = (props) => (
  <Radio
    disableRipple
    className="ht-radio-button"
    checkedIcon={
      <span className="ht-radio-button__icon ht-radio-button__checkedIcon" />
    }
    icon={<span className="ht-radio-button__icon" />}
    {...props}
  />
);

export default HTRadioButton;
