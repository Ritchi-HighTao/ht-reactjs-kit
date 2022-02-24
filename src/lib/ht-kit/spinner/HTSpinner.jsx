import React from 'react';

import './HTSpinner.scss';

import CircularProgress from '@mui/material/CircularProgress';

const HTSpinner = () => (
  <CircularProgress
    size={24}
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: '-12px',
      marginLeft: '-12px',
    }}
  />
);

export default HTSpinner;
