import styled from "@emotion/styled";
import { BottomNavigationAction, Paper, BottomNavigation } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import QuestIcon from '@mui/icons-material/AssignmentLate';
import AutoAwesome from '@mui/icons-material/AutoAwesome';
import NotesIcon from '@mui/icons-material/Notes';
import { useNavigate, useRouter } from "@tanstack/react-location";
import { PATHS } from "../../../router";

const StyledNavAction = styled(BottomNavigationAction)(({ theme }) => ({
  '&.Mui-selected': {
    color: 'violet'
  },
}))

const currentSelectedTab = (path: string) => {
  return Object.values(PATHS).find((p) => path.includes(p));
}

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
        }}
      >
        <StyledNavAction label="Home" value={PATHS.HOME} icon={<HomeIcon />} onClick={() => onLinkClick(PATHS.HOME)} />
        <StyledNavAction label="Notes" value={PATHS.NOTES} icon={<NotesIcon />} onClick={() => onLinkClick(PATHS.NOTES)} />
        <StyledNavAction label="Quests" value={PATHS.QUESTS} icon={<QuestIcon />} onClick={() => onLinkClick(PATHS.QUESTS)} />
        <StyledNavAction label="Rewards" value={PATHS.REWARDS} icon={<AutoAwesome />} onClick={() => onLinkClick(PATHS.REWARDS)} />
      </BottomNavigation>
    </Paper>
  )
};

export default BottomNav;