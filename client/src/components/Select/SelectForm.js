import React, { Component } from "react";
import Select from "react-select";

const SelectForm = ({ label, data, value, name, key, onChange }) => {
  const options = data.map((item) => ({
    value: item[value],
    label: item[name],
    key: item[key],
  }));

  return (
    <>
      <Select options={options} isMulti onChange={onChange} />
    </>
  );
};

export default SelectForm;
