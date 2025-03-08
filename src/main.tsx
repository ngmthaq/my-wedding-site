import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/lobster/400.css";

const element = document.getElementById("root")!;
const root = createRoot(element);
const theme = createTheme({ cssVariables: true });

root.render(
  <BrowserRouter>
    <ThemeProvider
      defaultMode="light"
      noSsr={true}
      disableTransitionOnChange={true}
      theme={theme}
    >
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
