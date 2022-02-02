import React from "react";

import { InputContainer, Label, Input } from "./styled";

type InputFieldProps = {
  label: string;
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  handleChange,
}) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input
        name={name}
        onChange={(event) => handleChange(event)}
        type="text"
      />
    </InputContainer>
  );
};

export default InputField;
