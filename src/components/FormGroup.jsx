import React from "react";

const FormGroup = ({
  error,
  fixedInput,
  formLabel,
  handleChange,
  inputPlaceholder,
  inputValue,
  optional = false,
}) => {
  return (
    <div className="form-group">
      <label className="form-group__label" htmlFor={formLabel}>
        {formLabel}
        {optional && <span className="form-group__optional">(optional)</span>}
      </label>
      <div className="form-group__input-container">
        {fixedInput && <p className="form-group__fixed-input">{fixedInput}</p>}
        <input
          className="form-group__input"
          data-error={error ? true : false}
          id={formLabel}
          onChange={handleChange}
          placeholder={inputPlaceholder}
          type="text"
          value={inputValue}
        />
      </div>
      {error && <p className="form-group__error-message">Please enter this field</p>}
    </div>
  );
};

export default FormGroup;
