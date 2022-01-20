import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CssBaseline } from "@mui/material/";
import { BrowserRouter } from "react-router-dom";
import { ColorModeProvider } from "./contexts/color-mode-context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
        <ColorModeProvider>
          <App />
        </ColorModeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
