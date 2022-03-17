import { Box, styled, Grid, IconButton, Typography } from "@mui/material";
import { INotes, Mood } from "./types"
import Circle from "@mui/icons-material/Circle"
import MoreVertIcon from '@mui/icons-material/MoreVert';

const StyledBox = styled(Box)({
  boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: "column",
  padding: '16px'
});

// Temporary
const moodIndicator = (mood: Mood) => {
  if (mood === Mood.SAD) {
    return "#0a58a5"
  }
  if (mood === Mood.HAPPY) {
    return "green"
  }
  if (mood === Mood.NEUTRAL) {
    return "gray"
  }
  if (mood === Mood.ANGRY) {
    return "red"
  }
}

const Note: React.FC<INotes> = ({ id, mood, content }) => {
  return (
    <StyledBox key={id}>
      <Grid sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
      }}>
        <Grid sx={{
          display: "flex",
          alignItems: "center"
        }}>
          <Circle sx={{ color: moodIndicator(mood), marginRight: '16px' }} />
          <Typography variant="button">
            April 1, 2021
          </Typography>
        </Grid>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Grid>
      <Grid>
        {content}
      </Grid>
    </StyledBox>
  )
};

export default Note;