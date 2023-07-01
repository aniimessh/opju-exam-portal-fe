import { StyledButton } from "./OpButton.style";

const OpButton = ({ children, event, ...otherProp }) => {
  return (
    <StyledButton onClick={event} {...otherProp}>
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
