import React from "react";

import { TextAreaContainer, Label, TextArea } from "./styled";

type TextFieldProps = {
  label: string;
  rows: number;
  name: string;
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  rows,
  handleChange,
  name,
  value,
}) => {
  return (
    <TextAreaContainer>
      <Label>{label}</Label>
      <TextArea
        rows={rows}
        onChange={(event) => handleChange(event)}
        name={name}
        value={value}
      />
    </TextAreaContainer>
  );
};

export default TextField;
