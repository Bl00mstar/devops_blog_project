import React from "react";

const Button = ({
  type,
  value,
  disabled,
  className = "btn waves-effect waves-blue blue ",
  onClick = {},
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={className}
      value={value}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
