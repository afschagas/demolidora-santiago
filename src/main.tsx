import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { CookieConsentProvider } from "./context/CookieConsentContext";
import AppToaster from "./components/AppToaster";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CookieConsentProvider>
        <App />
        <AppToaster />
      </CookieConsentProvider>
    </ThemeProvider>
  </React.StrictMode>
);
