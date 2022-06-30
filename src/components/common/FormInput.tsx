import React from "react";

const FormInput: React.FC<React.HTMLProps<HTMLInputElement>> = ({
  value,
  ...other
}) => {
  return <input className="form-input" {...other} />;
};

export default FormInput;
