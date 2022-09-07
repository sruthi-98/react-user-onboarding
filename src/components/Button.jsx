import React from "react";

const Button = ({
  buttonLabel,
  handleClick,
  variant = "primary",
  ...props
}) => {
  return (
    <button
      className={`button button--${variant}`}
      onClick={handleClick}
      {...props}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
