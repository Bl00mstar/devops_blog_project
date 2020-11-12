import React from "react";

const Button = ({ type, value, disabled }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className='btn waves-effect waves-blue blue '
      value={value}
    >
      {value}
    </button>
  );
};

export default Button;
