import { LoadingButton } from "@mui/lab";
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

// Styled button (default)
export const StyledButton = styled(Button)(
  ({ variant, mright = "0px", width = "auto", height = "auto" }) => ({
    textTransform: "inherit",
    fontWeight: 600,
    background: getVariant(variant),
    color: getColorForVariant(variant),
    boxShadow: "none",
    borderRadius: 4,
    marginRight: mright,
    width: width,
    height: height,
    border:
      variant === "outlined" ? "1px solid #D1D1D1" : "1px solid transparent",
    transition: "transform 200ms linear",

    "&:hover": {
      boxShadow: "none",
      background: variant === "contained" ? "#0F6CBD" : "transparent",
      border: variant === "outlined" && "1px solid #D1D1D1",
    },

    "&.active": {
      transform: "scale(0.8)",
    },
  })
);

// Styled button (Loading)
export const OpLoadingButton = styled(LoadingButton)(
  ({ width = "auto", height = "auto", mright = "0px" }) => ({
    padding: "1.15rem 0",
    width: width,
    height: height,
    borderRadius: 4,
    marginRight: mright,
  })
);
