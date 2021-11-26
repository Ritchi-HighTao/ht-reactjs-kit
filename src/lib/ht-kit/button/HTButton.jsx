import React from 'react';
import './HTButton.scss';

const HTButton = (props) => {
  const {
    children,
    onClick,
    outlined,
    secondary,
    className,
    disabled
  } = props;

  const isOutlined = () => (!outlined ? '' : 'ht-button__outlined');

  const Color = () => {
    if (!secondary) {
      return '';
    }

    return outlined ? 'ht-button__outlined-secondary' : 'ht-button__secondary';
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={`ht-button ${isOutlined()} ${Color()} ${className || ''} ${!disabled ? '' : 'disabled'} `}
    >
      <span className="ht-button__content">
        {children}
      </span>
    </button>
  );
};

export default HTButton;
