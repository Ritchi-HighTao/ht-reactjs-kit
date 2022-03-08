import React from 'react';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import './HTStepper.scss';

import HTButton from '../button/HTButton';
import HTCard from '../card/HTCard';

const HTStepper = (props) => {
  const {
    values,
    label,
    onClick,
    children,
    activeStep
  } = props;

  const maxSteps = values.length;

  return (
    <Box>
      <div className="ht-card">
        <HTCard title={label}>
          {children}
        </HTCard>
      </div>
      <MobileStepper
        variant=" "
        values={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <div className="next-button">
            <HTButton
              onClick={onClick}
              disabled={activeStep === maxSteps - 1}
              primary
              outlined
              className="button__iconed"
            >
              {activeStep === values.length - 1 ? 'Terminer' : 'Suivant'}
              <KeyboardArrowRight />
            </HTButton>
          </div>
        }
      />
    </Box>
  );
};

export default HTStepper;
