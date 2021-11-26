import React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#17963E',
    },
    secondary: {
      main: '#707070',
      light: '#FFFFFF',
    },
    warning: {
      main: '#cddc39',
    },
    popo: {
      main: '#000000',
    },
  },
});

const HTTheme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default HTTheme;
