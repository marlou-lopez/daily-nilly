import { Box, Fab } from "@mui/material";
import React from "react";
import NoteList from "../components/Notes";
import EditIcon from '@mui/icons-material/Edit';

const Home: React.FC = () => {
  return (
    <Box sx={{
      my: 2
    }}>
      <NoteList />
      <Fab color="primary" sx={{
        position: 'fixed',
        bottom: 75,
        right: 25
      }}>
        <EditIcon />
      </Fab>
    </Box>
  );
};

export default Home;
