import React from 'react';
import { Chip, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import './HTCombobox.scss';

const HTCombobox = ({
  label,
  onChange,
  items,
  freeSolo,
  blurOnSelect,
  multiple,
  placeholder,
  inputClass,
  values,
  defaultValue,
  name,
  onBlur,
  inputValue,
  getOptionLabel,
  getOptionDisabled,
  onDelete,
  disableClearable,
  onInputChange,
  clearOnBlur,
  emptyText
}) => (
  <Autocomplete
    multiple={multiple}
    noOptionsText={emptyText || 'Introuvable !'}
    inputValue={inputValue}
    value={values}
    getOptionLabel={getOptionLabel}
    options={items}
    clearOnBlur={clearOnBlur}
    openOnFocus
    defaultValue={defaultValue}
    blurOnSelect={blurOnSelect}
    onBlur={onBlur}
    onInputChange={onInputChange}
    fullWidth
    getOptionDisabled={getOptionDisabled}
    freeSolo={freeSolo}
    onChange={onChange}
    disableClearable={disableClearable}
    renderTags={(value) => value.map((option) => (
      <Chip key={option.id} onDelete={() => onDelete(option)} style={{ marginBottom: 8, marginRight: 5 }} variant="outlined" label={option.name} />
    ))}
    renderInput={(params) => (
      <TextField
        {...params}
        label={label}
        fullWidth
        name={name}
        placeholder={placeholder}
        className={inputClass}
      />
    )}
  />
);

export default HTCombobox;
