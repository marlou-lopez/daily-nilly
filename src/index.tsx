import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { NotesProvider } from "./contexts/notes-context";
import { CssBaseline } from "@mui/material/";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#142d4c",
    },
    background: {
      default: "#f0f2f5"
    }
  },
});


ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <NotesProvider>
        <App />
      </NotesProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
