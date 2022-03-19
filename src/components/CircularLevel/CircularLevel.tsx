import { Grid, Box, CircularProgress, Typography } from "@mui/material";

const LEVEL: {
  [key: number]: number
} = {
  1: 800,
  2: 1200,
  3: 1600,
  4: 2000,
  5: 2100
}

interface ICircularLevel {
  currentLevel: number;
  currentExperience: number;
}

const CircularLevel: React.FC<ICircularLevel> = ({ currentLevel, currentExperience }) => {
  return (
    <Grid container item justifyContent="center">
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          variant="determinate"
          sx={{
            position: "absolute",
            color: (theme) =>
              theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
          }}
          size={60}
          value={100}
        />
        <CircularProgress size={60} variant="determinate" value={(100 * currentExperience) / LEVEL[currentLevel + 1]} />

        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h5"
          >
            {currentLevel}
          </Typography>
        </Box>
      </Box>
    </Grid>
  )
};

export default CircularLevel;