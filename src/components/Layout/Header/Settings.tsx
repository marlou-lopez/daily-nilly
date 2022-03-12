import { Menu, Box, ToggleButtonGroup, ToggleButton, Divider, MenuItem, ListItemIcon, useTheme } from "@mui/material";
import { useColorMode } from "../../../contexts/color-mode-context";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountIcon from '@mui/icons-material/AccountCircle';

interface ISettings {
  anchorEl?: HTMLElement | null;
  handleClose: () => void;
  open: boolean;
}

const Settings: React.FC<ISettings> = ({ anchorEl, open, handleClose }) => {
  const { toggleColorMode } = useColorMode();
  const theme = useTheme();

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
    >
      <Box m={1} mt={0}>
        <ToggleButtonGroup
          value={theme.palette.mode}
          onChange={toggleColorMode}
          exclusive
          size="small"
        >
          <ToggleButton value="light">Light</ToggleButton>
          <ToggleButton value="dark">Dark</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Divider />
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <AccountIcon />
        </ListItemIcon>
        Account
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  )
};

export default Settings;