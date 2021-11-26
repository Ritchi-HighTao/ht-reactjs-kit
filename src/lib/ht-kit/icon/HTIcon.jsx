import React from 'react';
import './HTIcon.scss';

const HTIcon = ({ children, className }) => (
  <span className={`material-icons ht-icon ${className || ''}`}>
    {children}
  </span>
);

export default HTIcon;
