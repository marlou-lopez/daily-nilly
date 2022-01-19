import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { NotesProvider } from "./contexts/notes-context";
import { CssBaseline } from "@mui/material/";
import { BrowserRouter } from "react-router-dom";
import { ColorModeProvider } from "./contexts/color-mode-context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <NotesProvider>
        <ColorModeProvider>
          <App />
        </ColorModeProvider>
      </NotesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
