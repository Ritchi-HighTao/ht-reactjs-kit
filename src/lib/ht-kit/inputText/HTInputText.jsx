/* eslint-disable no-nested-ternary */
import React from 'react';
import { Icon, IconButton, InputAdornment, TextField } from '@material-ui/core';
import './HTInputText.scss';

const HTInputText = (props) => {
  const {
    startIconText,
    startIconImage,
    endIcon,
    startIconTextColor,
    placeholder,
    iconButton,
    iconButtonColor,
    iconButtonClick,
    onChange,
    error,
    key,
    success,
    name,
    value,
    onKeyPress,
    label,
    endText,
    type,
    onBlur,
    disabled,
    max,
    min,
    onFocus
  } = props;

  return (
    <TextField
      onKeyPress={onKeyPress}
      onChange={onChange}
      name={name}
      type={type}
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
      key={key}
      value={value}
      fullWidth
      className={`ht-input-text ${success ? 'success' : ''}`}
      error={error}
      placeholder={placeholder}
      InputProps={{
        startAdornment: typeof startIconImage === 'object' || typeof startIconText === 'string'
        || typeof label === 'string' ? (
          <InputAdornment position="start">
            {startIconText ? (
              <Icon color={startIconTextColor}>{startIconText}</Icon>
            )
              : typeof startIconImage === 'object' ? (
                <img
                  src={startIconImage.src}
                  width="24px"
                  height="24px"
                  alt={startIconImage.alt}
                  style={{ paddingBottom: 5 }}
                />
              ) : typeof label === 'string' && label}
          </InputAdornment>
          ) : null,
        endAdornment: typeof endIcon === 'string' || typeof iconButton === 'string'
        || typeof endText === 'string' ? (
          <InputAdornment position="end">
            {typeof endIcon === 'string' ? (
              <Icon color="primary">{endIcon}</Icon>
            ) : (
              typeof iconButton === 'string' ? (
                <IconButton onClick={iconButtonClick}>
                  <Icon color={iconButtonColor}>{iconButton}</Icon>
                </IconButton>
              ) : typeof endText === 'string' && endText
            )}
          </InputAdornment>
          ) : null,
        inputProps: {
          max,
          min
        }
      }}
    />
  );
};

export default HTInputText;
