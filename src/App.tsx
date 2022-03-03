import React, { useMemo } from "react";
import { createTheme, Grid, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./components/Header";
import LeftSidebar from "./components/Sidebar/LeftSidebar";
import RightSidebar from "./components/Sidebar/RightSidebar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Quests from "./pages/Quests";
import { useColorMode } from "./contexts/color-mode-context";
import { getDesignTokens } from "./utils/theme-utils";
import { NotesProvider } from "./contexts/notes-context";
import { QuestsProvider } from "./contexts/quests-context";
import { ModalProvider } from "./contexts/modal-context";

function App() {
  const { mode } = useColorMode();

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Grid
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
        </Grid>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
