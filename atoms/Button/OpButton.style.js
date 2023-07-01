import { Button } from "@mui/material";
import { styled } from "@mui/system";

const getVariant = (variant) => {
  variant === "contained" && "#0F6CBD";
  variant === "secondary" && "#FFFFFF";
};

const getColorForVariant = (variant) => {
  variant === "contained" && "#FFFFFF";
  variant === "secondary" && "#242424";
};

// Styled button
export const StyledButton = styled(Button)(({ theme, variant }) => ({
  textTransform: "inherit",
  fontWeight: 600,
  background: getVariant(variant),
  color: getColorForVariant(variant),
  boxShadow: "none",
  borderRadius: 4,
  border:
    variant === "secondary" ? "1px solid #D1D1D1" : "1px solid transparent",

  "&:hover": {
    boxShadow: "none",
    background: variant === "contained" ? "#115EA3" : "transparent",
  },
}));
