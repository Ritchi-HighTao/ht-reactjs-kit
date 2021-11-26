import React from 'react';
import './HTButtonAuthentification.scss';

import HTButton from '../button/HTButton';

const HTButtonAuthentification = ({
  className,
  googleClick,
  fbClick,
  linkedinClick,
  googleImg,
  fbImg,
  linkedinImg
}) => (
  <div className={`ht-button-authentification ${className || ''}`}>
    <HTButton onClick={googleClick} className="ht-button-authentification__google">
      <img width="20" height="20" src={googleImg} alt="google" />
      Google
    </HTButton>
    <HTButton onClick={fbClick} className="ht-button-authentification__facebook">
      <img width="20" height="20" src={fbImg} alt="facebook" />
      Facebook
    </HTButton>
    <HTButton onClick={linkedinClick} className="ht-button-authentification__linkedin">
      <img width="20" height="20" src={linkedinImg} alt="linkedin" />
      LinkedIn
    </HTButton>
  </div>
);

export default HTButtonAuthentification;
