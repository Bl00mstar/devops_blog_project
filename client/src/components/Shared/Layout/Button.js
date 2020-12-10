import React from "react";

const Button = ({
  type,
  value,
  disabled,
  className = "btn waves-effect waves-blue blue ",
  onClick = "",
  autocomplete = "off",
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={className}
      value={value}
      autoComplete={autocomplete}
    >
      {value}
    </button>
  );
};

export default Button;
