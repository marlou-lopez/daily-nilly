import { BottomNavigation, BottomNavigationAction, Box, Card, Container, Grid, IconButton, LinearProgress, linearProgressClasses, Paper, styled, Typography } from "@mui/material";
import QuestIcon from '@mui/icons-material/AssignmentLate';
import PendingAction from '@mui/icons-material/PendingActions';
import MenuIcon from '@mui/icons-material/Menu';
import DoneIcon from '@mui/icons-material/Done';
import PersonIcon from '@mui/icons-material/Person';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import RepeatIcon from '@mui/icons-material/Repeat';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 8,
  width: "100%",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#324E7B' : '#308fe8',
  },
}));

const StyledBox = styled(Box)({
  boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '4px',
  height: '86px',
  display: 'flex',
  alignItems: 'center'
});

const StyledBottomNavAction = styled(BottomNavigationAction)(({ theme }) => ({
  '& .MuiBottomNavigationAction-label': {
    transition: 'none',
  },
  '&.Mui-selected': {
    color: '#324E7B',
    paddingTop: '12px'
  },
  padding: '12px'
}));

const TestCard = ({ text, complete }: { text: string, complete?: boolean }) => {
  return (
    <StyledBox>
      <Grid sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 1,
        height: '100%',
        padding: '12px 12px 8px 20px'
      }}>
        <Typography>
          {text}
        </Typography>
        <Typography variant="caption" sx={{
          color: '#86A6DF'
        }}>
          200xp
        </Typography>
      </Grid>
      <IconButton sx={{
        padding: '20px'
      }}>
        {complete ? <DoneIcon sx={{
          height: '36px',
          width: '36px',
          color: '#324E7B'
        }} /> : <PendingAction sx={{
          height: '36px',
          width: '36px',
          color: '#cccccc'
        }} />}
      </IconButton>
    </StyledBox>
  )
}

const TestPage = () => {
  return (
    <Grid sx={{
      minHeight: "inherit"
    }}>
      <Container maxWidth="md" sx={{
        paddingTop: "16px",
        minHeight: "inherit",
        display: "flex",
        flexDirection: "column",
      }}>
        <Grid sx={{
          display: "flex",
          alignItems: "center"
        }}>
          <StyledBox sx={{
            flexGrow: 1,
            padding: "12px",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "120px",
          }}>
             <Box sx={{
               width: "60px",
               height: "60px",
               borderRadius: "50%",
               bgcolor: "#324E7B",
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               color: "#ffffff",
               fontWeight: "bold",
               fontSize: "24px"
             }}>
                21
             </Box>
             <BorderLinearProgress variant="determinate" value={50}/>
          </StyledBox>
        </Grid>
        <Grid sx={{
          marginTop: "16px"
        }}>
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
          <Grid mt={1}>
            <Grid sx={{
              '> div:not(:last-child)': {
                marginBottom: "12px"
              }
            }}>
              <TestCard text="Read one chapter of any book" complete />
              <TestCard text="Read one article" />
              <TestCard text="Write a daily journal" />
              <TestCard text="Learn a new word" />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
        <BottomNavigation
          sx={{
            boxShadow: '0px 2px 9px rgba(0, 0, 0, 0.25)'
          }}
          value="quest"
        >
          <StyledBottomNavAction value="quest" icon={<QuestIcon />} />
          <StyledBottomNavAction value="notes" icon={<StickyNote2Icon />} />
          <StyledBottomNavAction value="profile" icon={<PersonIcon />} />
          <StyledBottomNavAction value="menu" icon={<MenuIcon />} />
        </BottomNavigation>
      </Paper>
    </Grid>
  )
};

export default TestPage;