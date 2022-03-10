import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CssBaseline } from "@mui/material/";
import { ColorModeProvider } from "./contexts/color-mode-context";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "./router";

// if (process.env.NODE_ENV === 'development') {
//   const { worker } = require('./mocks/browser')
//   worker.start()
// }

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider>
        <CssBaseline />
        <ColorModeProvider>
          <App />
        </ColorModeProvider>
      </RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
