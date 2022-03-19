import { Box, CircularProgress, Divider, Grid, IconButton, Typography } from "@mui/material";
import CircularLevel from "../../components/CircularLevel";
import QuestMenu from "./QuestMenu";

const QuestHeader: React.FC = () => {
  return (
    <Grid container justifyContent="center" gap={3} sx={{ position: "relative" }}>
      <QuestMenu />
      <CircularLevel currentLevel={2} currentExperience={200} />
      <Grid container item sx={{ color: "#324E7B" }}>
        <Grid container sx={{ borderRight: "1px solid #cccccc" }} item xs={4} flexWrap="wrap" flexDirection="column" alignItems="center" justifyContent="center">
          <Typography variant="h5" fontWeight="bold">1/4</Typography>
          <Typography variant="caption" textAlign="center">Quests</Typography>
        </Grid>
        <Grid container sx={{ borderRight: "1px solid #cccccc" }} item xs={4} flexDirection="column" alignItems="center" justifyContent="center">
          <Typography variant="h5" fontWeight="bold">5</Typography>
          <Typography variant="caption" textAlign="center">Days in a row</Typography>
        </Grid>
        <Grid container item xs={4} flexDirection="column" alignItems="center" justifyContent="center">
          <Typography variant="h5" fontWeight="bold">14</Typography>
          <Typography variant="caption" textAlign="center">March</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
};

export default QuestHeader;