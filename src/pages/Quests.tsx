import React from "react";
import {
  Grid,
} from "@mui/material";
import QuestList from "../features/Quests/QuestList";

const Quests: React.FC = () => {

  return (
    <Grid sx={{
      display: "flex",
    }}>
      <QuestList />
    </Grid>
  );
};

export default Quests;
