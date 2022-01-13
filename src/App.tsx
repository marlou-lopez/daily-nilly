import { Container, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <Grid
      sx={{
        backgroundColor: "#f5f6fb",
        display: "flex",
        width: "100%",
        minHeight: "100%",
      }}
    >
      <Header />
      {/* Left sidenav */}
      <LeftSidebar />
      {/* Main */}
      <Feed />
      {/* Right sidenav */}
      <RightSidebar />
    </Grid>
  );
}

export default App;
