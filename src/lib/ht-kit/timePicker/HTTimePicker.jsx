import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const HTTimePicker = (props) => {
  const {
    onChange,
    value,
    label
  } = props;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <TimePicker
        variant="inline"
        ampm={false}
        openTo="hours"
        views={['hours', 'minutes', 'seconds']}
        format="HH:mm:ss"
        label={label}
        value={value}
        onChange={onChange}
      />
    </MuiPickersUtilsProvider>
  );
};
export default HTTimePicker;
