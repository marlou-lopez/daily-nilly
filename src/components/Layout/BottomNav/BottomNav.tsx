import styled from "@emotion/styled";
import { BottomNavigationAction, Paper, BottomNavigation, CSSObject, Theme } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import QuestIcon from '@mui/icons-material/AssignmentLate';
import AutoAwesome from '@mui/icons-material/AutoAwesome';
import NotesIcon from '@mui/icons-material/Notes';
import { useNavigate, useRouter } from "@tanstack/react-location";
import { PATHS } from "../../../router";


const currentSelectedTab = (path: string) => {
  return Object.values(PATHS).find((p) => path.includes(p));
}

// const tabStyle: CSSObject = {
//   '&.Mui-selected': {
//     color:  
//   }
// }

const tabStyle = (theme: Theme) => ({
  '& .MuiBottomNavigationAction-label': {
    transition: 'none',
    fontSize: 14,
    '&.Mui-selected': {
      fontSize: 14
    }
  },
  '&.Mui-selected': {
    color: theme.palette.secondary.main
  }
})

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const route = useRouter();

  const onLinkClick = (path: string) => {
    navigate({
      to: path,
      replace: true,
    })
  }
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={currentSelectedTab(route.state.location.pathname)}
        sx={{
          bgcolor: "background.default",
          borderTop: "1px solid",
          borderTopColor: "divider"
        }}
      >
        <BottomNavigationAction sx={tabStyle} label="Home" value={PATHS.HOME} icon={<HomeIcon />} onClick={() => onLinkClick(PATHS.HOME)} />
        <BottomNavigationAction sx={tabStyle} label="Notes" value={PATHS.NOTES} icon={<NotesIcon />} onClick={() => onLinkClick(PATHS.NOTES)} />
        <BottomNavigationAction sx={tabStyle} label="Quests" value={PATHS.QUESTS} icon={<QuestIcon />} onClick={() => onLinkClick(PATHS.QUESTS)} />
        <BottomNavigationAction sx={tabStyle} label="Rewards" value={PATHS.REWARDS} icon={<AutoAwesome />} onClick={() => onLinkClick(PATHS.REWARDS)} />
      </BottomNavigation>
    </Paper>
  )
};

export default BottomNav;