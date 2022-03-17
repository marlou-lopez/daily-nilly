import { BottomNavigationAction, Paper, BottomNavigation, styled } from "@mui/material";
import QuestIcon from '@mui/icons-material/AssignmentLate';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useRouter } from "@tanstack/react-location";
import { PATHS } from "../../../router";


const currentSelectedTab = (path: string) => {
  return Object.values(PATHS).find((p) => path.includes(p));
}

const StyledBottomNavAction = styled(BottomNavigationAction)(({ theme }) => ({
  '&.Mui-selected': {
    color: '#324E7B',
    paddingTop: '12px'
  },
  padding: '12px'
}));

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
        value={currentSelectedTab(route.state.location.pathname)}
        sx={{
          boxShadow: '0px 2px 9px rgba(0, 0, 0, 0.25)'
        }}
      >
        <StyledBottomNavAction value={PATHS.QUESTS} icon={<QuestIcon />} onClick={() => onLinkClick(PATHS.HOME)} />
        <StyledBottomNavAction value={PATHS.NOTES} icon={<StickyNote2Icon />} onClick={() => onLinkClick(PATHS.NOTES)} />
        <StyledBottomNavAction value={PATHS.PROFILE} icon={<PersonIcon />} onClick={() => onLinkClick(PATHS.PROFILE)} />
        <StyledBottomNavAction value={PATHS.REWARDS} icon={<MenuIcon />} onClick={() => onLinkClick(PATHS.REWARDS)} />
      </BottomNavigation>
    </Paper>
  )
};

export default BottomNav;