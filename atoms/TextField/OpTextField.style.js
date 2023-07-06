const { TextField } = require("@mui/material");
const { styled } = require("@mui/system");

export const StyledTextField = styled(TextField)(
  ({ variant, width = "auto" }) => ({
    boxShadow: "none",
    borderRadius: 4,
    background: "transparent",
    width: width,
    borderColor: "#D1D1D1",

    "&:hover": {
      borderColor: "transparent",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "#D1D1D1" },
      "&:hover fieldset": {
        borderColor: "#D1D1D1",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#D1D1D1",
      },
    },
  })
);
