import React, { useState } from "react";

import Button from "./Button";
import FORM_STEPS from "data/formSteps";
import FormGroup from "./FormGroup";
import OptionCard from "./OptionCard";

const createInitialFormState = () => {
  let state = {};
  FORM_STEPS.forEach((formStep) => {
    if (formStep.fields)
      formStep.fields.forEach((field) => {
        state[field.key] = "";
      });
    if (formStep.optionKey) state[formStep.optionKey] = "";
  });
  return state;
};

const OnboardingForm = ({ activeStep, moveToNextStep }) => {
  const [formState, setFormState] = useState(() => createInitialFormState());

  const setFormKey = (formKey, formValue) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [formKey]: formValue,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    moveToNextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      {FORM_STEPS[activeStep]?.fields?.map(
        ({ fixedInput, key, label, optional, placeholder }) => (
          <FormGroup
            fixedInput={fixedInput}
            formLabel={label}
            key={key}
            handleChange={(event) => setFormKey(key, event.target.value)}
            inputPlaceholder={placeholder}
            inputValue={formState[key]}
            optional={optional}
          />
        )
      )}
      {FORM_STEPS[activeStep]?.options?.map(({ desc, heading, Icon }) => (
        <OptionCard desc={desc} heading={heading} Icon={Icon} />
      ))}
      <Button
        buttonLabel={
          FORM_STEPS.length - 1 === activeStep
            ? "Launch Eden"
            : "Create Workspace"
        }
        type="submit"
      />
    </form>
  );
};

export default OnboardingForm;
