import "@/styles/globals.scss";
import CustomTheme from "@/theme";
import { ThemeProvider } from "@mui/material";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={CustomTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
