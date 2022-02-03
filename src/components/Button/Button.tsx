import React from "react";

import { StyledButton } from "./styled";

type ButtonProps = {
  label: string;
  handleClick: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, handleClick, disabled }) => {
  return (
    <StyledButton onClick={() => handleClick()} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export default Button;
