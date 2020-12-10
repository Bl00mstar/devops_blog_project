import React from "react";

const InputForm = ({ label, type, name, onChange }) => {
  return (
    <>
      <label htmlFor={label}>{name}</label>
      <input
        id={label}
        className='validate'
        name={name}
        type={type}
        onChange={onChange}
      />
    </>
  );
};

export default InputForm;
