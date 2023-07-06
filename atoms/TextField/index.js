import { useEffect, useState } from "react";
import { StyledTextField } from "./OpTextField.style";

const TextFieldIdProp = (variant) => {
  if (variant === "filled") return "filled-basic";
  if (variant === "outlined") return "outlined-basic";
};

const OpTextField = ({ label, event, variant, ...otherProp }) => {
  const handleClickEvent = () => {
    event();
  };

  return (
    <StyledTextField
      onClick={event && handleClickEvent}
      id={variant ? TextFieldIdProp(variant) : "outlined-basic"}
      variant={variant}
      placeholder={label}
      {...otherProp}
    />
  );
};

export default OpTextField;
