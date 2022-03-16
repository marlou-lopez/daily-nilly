import { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import { useColorMode } from "./contexts/color-mode-context";
import { getDesignTokens } from "./utils/theme-utils";
import { ModalProvider } from "./contexts/modal-context";
import Layout from "./components/Layout/Layout";
import { Outlet } from "@tanstack/react-location";


function App() {
  const { mode } = useColorMode();

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Layout>
          <Outlet />
        </Layout>
        {/* <Outlet /> */}
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
