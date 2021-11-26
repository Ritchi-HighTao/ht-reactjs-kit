import React from 'react';
import './HTMenuButton.scss';

const HTMenuButton = ({ onClick, active, className }) => (
  <label className={`ht-menu-button ${className || ''}`} htmlFor="ht-menu-button__input">
    <input className={active ? 'active' : ''} onClick={onClick} type="checkbox" id="ht-menu-button__input" />
    <span />
    <span />
    <span />
  </label>
);
export default HTMenuButton;
