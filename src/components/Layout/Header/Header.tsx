import { useState } from "react";
import {
  useScrollTrigger,
  Slide, AppBar, Toolbar,
  IconButton, Tooltip, useTheme
} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import AccountIcon from '@mui/icons-material/AccountCircle';
import Settings from "./Settings";
import { ReactComponent as DaylessIcon } from "../../../assets/dayless-icon.svg"
import { ReactComponent as DaylessIconDark } from "../../../assets/dayless-icon-dark.svg"
import { ReactComponent as DaylessTitle } from "../../../assets/dayless-title.svg"
import { ReactComponent as DaylessTitleDark } from "../../../assets/dayless-title-dark.svg"

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
  const theme = useTheme();
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
          backgroundImage: "none",
          borderBottom: "1px solid",
          borderBottomColor: "divider",
          boxShadow: "none"
        }}>
          <Toolbar sx={{
            justifyContent: "space-between"
          }}>
            {/* <IconButton>
              {
                theme.palette.mode === "light"
                  ? <DaylessTitle />
                  : <DaylessTitleDark />
              }
            </IconButton> */}
            <IconButton aria-label="Account">
              <AccountIcon />
            </IconButton>
            <IconButton aria-label="Dayless">
              {
                theme.palette.mode === "light"
                  ? <DaylessIcon height="35px" width="15px" />
                  : <DaylessIconDark height="35px" width="15px" />
              }
            </IconButton>

            <Tooltip title="App Settings">
              <IconButton aria-label="settings" onClick={handleClickSetting}>
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