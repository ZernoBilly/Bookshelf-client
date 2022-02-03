import React from "react";

import { InputContainer, Label, Input } from "./styled";

type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  handleChange,
}) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input
        value={value}
        name={name}
        onChange={(event) => handleChange(event)}
        type="text"
      />
    </InputContainer>
  );
};

export default InputField;
