import React from "react";
import {
  Grid,
} from "@mui/material";
import QuestList from "../features/Quests/QuestList";
import QuestHeader from "../features/Quests/QuestHeader";

const Quests: React.FC = () => {

  return (
    <Grid sx={{
      display: "flex",
      flexDirection: "column",
      gap: "36px"
    }}>
      <QuestHeader />
      <QuestList />
    </Grid>
  );
};

export default Quests;
