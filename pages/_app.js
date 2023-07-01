import "@/styles/globals.css";
import CustomTheme from "@/theme";
import { ThemeProvider } from "@mui/material";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={CustomTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
