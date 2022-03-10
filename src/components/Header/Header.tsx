import { useState } from "react";
import {
  useScrollTrigger,
  Slide, AppBar, Toolbar,
  IconButton, Tooltip
} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import Settings from "../Settings";


interface IHideOnScroll {
  children: React.ReactElement
}

const HideOnScroll = ({ children }: IHideOnScroll) => {
  const trigger = useScrollTrigger();
  return (
    <Slide in={!trigger}>
      {children}
    </Slide>
  );
}

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openSetting = Boolean(anchorEl);
  const handleClickSetting = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseSetting = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar sx={{
          bgcolor: "background.default",
          backgroundImage: "none"
        }}>
          <Toolbar sx={{
            justifyContent: "space-between"
          }}>
            <IconButton>
              <BrandingWatermarkIcon />
            </IconButton>
            <Tooltip title="App Settings">
              <IconButton onClick={handleClickSetting}>
                <SettingsIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Settings
        anchorEl={anchorEl}
        open={openSetting}
        handleClose={handleCloseSetting}
      />
      <Toolbar />
    </>
  )
};

export default Header;