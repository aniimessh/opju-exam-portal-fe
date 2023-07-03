import { Button } from "@mui/material";
import { styled } from "@mui/system";

const getVariant = (variant) => {
  if (variant === "contained") return "#0F6CBD";
  if (variant === "outlined") return "#FFFFFF";
};

const getColorForVariant = (variant) => {
  if (variant === "contained") return "#FFFFFF";
  if (variant === "outlined") return "#242424";
};

// Styled button
export const StyledButton = styled(Button)(
  ({ theme, variant, mRight = "0px" }) => ({
    textTransform: "inherit",
    fontWeight: 600,
    background: getVariant(variant),
    color: getColorForVariant(variant),
    boxShadow: "none",
    borderRadius: 4,
    marginRight: mRight,
    border:
      variant === "outlined" ? "1px solid #D1D1D1" : "1px solid transparent",

    "&:hover": {
      boxShadow: "none",
      background: variant === "contained" ? "#115EA3" : "transparent",
      border: variant === "outlined" && "1px solid #242424",
    },
  })
);
