import React from "react";

import { StyledButton } from "./styled";

type ButtonProps = {
  label: string;
  handleClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, handleClick }) => {
  return <StyledButton onClick={() => handleClick()}>{label}</StyledButton>;
};

export default Button;
