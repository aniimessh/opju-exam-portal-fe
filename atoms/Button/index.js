import { useEffect, useState } from "react";
import { StyledButton } from "./OpButton.style";

const OpButton = ({ children, event, ...otherProp }) => {
  const [isAnimate, setIsAnimate] = useState();

  const handleClickEvent = () => {
    setIsAnimate(true);
    setTimeout(() => setIsAnimate(false), 100);
    event();
  };

  return (
    <StyledButton
      className={isAnimate ? "active" : ""}
      onClick={handleClickEvent}
      {...otherProp}
    >
      {children}
    </StyledButton>
  );
};

export default OpButton;

/**
 *
 * Button
 * - children
 * - onClick
 * -
 */
