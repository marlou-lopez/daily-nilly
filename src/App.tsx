import { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import { useColorMode } from "./contexts/color-mode-context";
import { getDesignTokens } from "./utils/theme-utils";
import { ModalProvider } from "./contexts/modal-context";
import Layout from "./Layout";
import { Outlet } from "@tanstack/react-location";


function App() {
  const { mode } = useColorMode();

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        {/* <Grid
          sx={{
            bgcolor: "background.default",
            display: "flex",
            width: "100%",
            minHeight: "100%",
          }}
        >
          <Header />
          <LeftSidebar />
          <Feed>
            <Routes>
              <Route
                path="/"
                element={
                  <NotesProvider>
                    <Home />
                  </NotesProvider>
                }
              />
              <Route
                path="/quests"
                element={
                  <QuestsProvider>
                    <Quests />
                  </QuestsProvider>
                }
              />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Feed>
          <RightSidebar />
        </Grid> */}
        <Layout>
          <Outlet />
        </Layout>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
