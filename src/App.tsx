import React, { useMemo, useState } from "react";
import { createTheme, Grid, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Quests from "./pages/Quests";
import { useColorMode } from "./contexts/color-mode-context";
import { getDesignTokens } from "./utils/theme-utils";

function App() {
  const { mode } = useColorMode();

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
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
            <Route path="/" element={<Home />} />
            <Route path="/quests" element={<Quests />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Feed>
        <RightSidebar />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
