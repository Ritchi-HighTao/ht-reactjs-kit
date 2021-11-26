import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import frLocale from 'date-fns/locale/fr';
import {
  DatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';

import './HTInputDate.scss';

import HTInputText from '../inputText/HTInputText';

const HTInputDate = ({
  openTo,
  views, value, onChange, minDate, disableFuture,
  format, label, placeholder, maxDate
}) => {
  const [open, setOpen] = useState(false);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
      <DatePicker
        variant="inline"
        fullWidth
        open={!!open}
        maxDate={maxDate}
        onClose={() => setOpen(false)}
        onAccept={() => setOpen(false)}
        openTo={openTo}
        format={format}
        disableFuture={disableFuture}
        TextFieldComponent={() => (
          <HTInputText
            value={value}
            onFocus={setOpen}
            placeholder={placeholder}
            label={label}
            endIcon="event"
          />
        )}
        views={views}
        onChange={onChange}
        minDate={minDate}
      />
    </MuiPickersUtilsProvider>
  );
};

export default HTInputDate;
