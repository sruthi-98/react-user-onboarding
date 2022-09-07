import React, { useState } from "react";

import OnboardingForm from "components/OnboardingForm";
import Stepper from "components/Stepper";
import logo from "assets/logo.png";
import FORM_STEPS from "data/formSteps";

const Onboarding = () => {
  const [activeStep, setActiveStep] = useState(0);

  const moveToNextStep = () => {
    if (activeStep === FORM_STEPS.length - 1) return;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div className="onboarding">
      <header className="onboarding__header">
        <img src={logo} alt="" />
        <h1 className="onboarding__heading">Eden</h1>
      </header>
      <main className="onboarding__section">
        <Stepper activeStep={activeStep} stepCount={FORM_STEPS.length} />
        <h2>{FORM_STEPS[activeStep].heading}</h2>
        <p>{FORM_STEPS[activeStep].desc}</p>
        <OnboardingForm
          activeStep={activeStep}
          moveToNextStep={moveToNextStep}
        />
      </main>
    </div>
  );
};

export default Onboarding;
