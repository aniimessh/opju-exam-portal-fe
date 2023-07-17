import store from "@/store/store";
import "@/styles/globals.scss";
import CustomTheme from "@/theme";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <ThemeProvider theme={CustomTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
    </Provider>
  );
}
