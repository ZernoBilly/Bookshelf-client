import React from "react";

import { TextAreaContainer, Label, TextArea } from "./styled";

type TextFieldProps = {
  label: string;
  rows: number;
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextField: React.FC<TextFieldProps> = ({
  label,
  rows,
  handleChange,
  name,
}) => {
  return (
    <TextAreaContainer>
      <Label>{label}</Label>
      <TextArea
        rows={rows}
        onChange={(event) => handleChange(event)}
        name={name}
      />
    </TextAreaContainer>
  );
};

export default TextField;
