import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "@/styles/GlobalStyle.ts";
// import { ThemeProvider } from "styled-components";
// import { ThemeType, theme } from "@/styles/theme";

createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyle />
    <App />
  </>,
);
