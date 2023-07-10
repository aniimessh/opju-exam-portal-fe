import { createTheme } from "@mui/material";

const CustomTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0F6CBD",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});

export default CustomTheme;
