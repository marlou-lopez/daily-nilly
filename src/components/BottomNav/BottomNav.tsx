import styled from "@emotion/styled";
import { BottomNavigationAction, Paper, BottomNavigation } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import TrophyIcon from '@mui/icons-material/EmojiEvents';
import QuestIcon from '@mui/icons-material/AssignmentLate';
import { useNavigate, useRouter } from "@tanstack/react-location";
import { PATHS } from "../../router";

const StyledNavAction = styled(BottomNavigationAction)(({ theme }) => ({
  '&.Mui-selected': {
    color: 'violet'
  }
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
          borderTop: "1px solid grey"
        }}
      >
        <StyledNavAction label="Home" value="home" icon={<HomeIcon />} onClick={() => onLinkClick(PATHS.HOME)} />
        <StyledNavAction label="Quests" value="quests" icon={<QuestIcon />} onClick={() => onLinkClick(PATHS.QUESTS)} />
        <StyledNavAction label="Achievements" value="achievements" icon={<TrophyIcon />} onClick={() => onLinkClick(PATHS.ACHIEVEMENTS)} />
      </BottomNavigation>
    </Paper>
  )
};

export default BottomNav;