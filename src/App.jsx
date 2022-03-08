import React, { useState } from 'react';

import './App.scss';

import HTContainer from './lib/ht-kit/container/HTContainer';
import HTPagination from './lib/ht-kit/pagination/HTPagination';
import HTStepper from './lib/ht-kit/stepper/HTStepper';

const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.'
  },
  {
    label: 'Create an add',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`
  }
];

function App() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <HTContainer>
          <p style={{ fontSize: 30, color: 'green' }}>Hightao &apos s recrutement platform react-kits</p>
        </HTContainer>
        <HTPagination
          maxPage={2}
          currentPage={1}
        />
      </header>
      <HTStepper
        values={steps}
        label={steps[activeStep].label}
        onClick={handleNext}
        activeStep={activeStep}
      >
        {steps[activeStep].description}
      </HTStepper>
    </div>
  );
}

export default App;
