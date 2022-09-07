import React from "react";

const Stepper = ({ activeStep, stepCount }) => {
  return (
    <div className="stepper">
      {[...Array(stepCount)].map((_, index) => (
        <p className={`stepper__step ${activeStep === index ? "active" : ""}`}>
          {index + 1}
        </p>
      ))}
    </div>
  );
};

export default Stepper;
