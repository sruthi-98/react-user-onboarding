import React, { useState } from "react";

import Button from "components/Button";
import FormGroup from "components/FormGroup";
import OptionCard from "components/OptionCard";
import FORM_STEPS from "data/formSteps";

const createInitialFormState = (error = false) => {
  let state = {};
  FORM_STEPS.forEach((formStep) => {
    if (formStep.fields)
      formStep.fields.forEach((field) => {
        state[field.key] = error ? false : "";
      });
    if (formStep.optionKey && !error)
      state[formStep.optionKey] = formStep?.options?.[0]?.value;
  });
  return state;
};

const OnboardingForm = ({ activeStep, moveToNextStep }) => {
  const [formState, setFormState] = useState(() => createInitialFormState());
  const [errorState, setErrorState] = useState(() =>
    createInitialFormState(true)
  );

  const setKey = (key, value, setState) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const setErrorKey = (errorKey, errorValue) =>
    setKey(errorKey, errorValue, setErrorState);

  const setFormKey = (formKey, formValue) =>
    setKey(formKey, formValue, setFormState);

  const setFieldError = () => {
    let isFieldErrorExists = false;
    if (!FORM_STEPS[activeStep]?.fields) return isFieldErrorExists;

    const newErrorState = { ...errorState };
    for (let { key, optional } of FORM_STEPS[activeStep]?.fields) {
      if (formState[key].length || optional) continue;

      newErrorState[key] = true;
      isFieldErrorExists = true;
    }

    setErrorState(newErrorState);
    return isFieldErrorExists;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!setFieldError()) moveToNextStep();
  };

  return (
    <form className="onboarding-form" onSubmit={handleSubmit}>
      {FORM_STEPS[activeStep]?.fields?.map(
        ({ fixedInput, key, label, optional, placeholder }) => (
          <FormGroup
            error={errorState[key]}
            fixedInput={fixedInput}
            formLabel={label}
            key={key}
            handleChange={(event) => {
              if (errorState[key]) setErrorKey(key, false);
              setFormKey(key, event.target.value);
            }}
            inputPlaceholder={placeholder}
            inputValue={formState[key]}
            optional={optional}
          />
        )
      )}
      {FORM_STEPS[activeStep]?.optionKey && (
        <div className="onboarding-form__options">
          {FORM_STEPS[activeStep]?.options?.map(
            ({ desc, heading, Icon, value }, index) => (
              <OptionCard
                desc={desc}
                handleClick={() =>
                  setFormKey(FORM_STEPS[activeStep].optionKey, value)
                }
                heading={heading}
                Icon={Icon}
                key={index}
                selected={formState[FORM_STEPS[activeStep].optionKey] === value}
              />
            )
          )}
        </div>
      )}
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
