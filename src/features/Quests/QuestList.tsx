import { Grid, IconButton, Typography } from "@mui/material";
import RepeatIcon from '@mui/icons-material/Repeat';
import Quest from "./Quest";

const QUESTS = [
  {
    content: "Read one chapter of any book",
    exp: 200,
    complete: true
  },
  {
    content: "Read one article",
    exp: 200
  },
  {
    content: "Write a daily journal",
    exp: 200
  },
  {
    content: "Learn a new word",
    exp: 100
  },
]

const QuestList: React.FC = () => {
  return (
    <Grid>
      <Grid sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
      }}>
        <Typography>
          Improve English
        </Typography>
        <IconButton>
          <RepeatIcon sx={{
            color: '#86A6DF',
            height: "18px",
            width: "18px"
          }} />
        </IconButton>
      </Grid>
      <Grid sx={{
        '> div:not(:last-child)': {
          marginBottom: "12px"
        }
      }}>
        {QUESTS.map((q) => (
          <Quest {...q} />
        ))}
      </Grid>
    </Grid>
  )
};

export default QuestList;