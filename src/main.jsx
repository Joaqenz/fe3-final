import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Css/index.css";
import "./Css/colors.css";
import "./Css/theme.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Context/themeContext.jsx";
import { DentistProvider } from "./Context/dentistContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <DentistProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DentistProvider>
    </ThemeProvider>
  </React.StrictMode>
);
