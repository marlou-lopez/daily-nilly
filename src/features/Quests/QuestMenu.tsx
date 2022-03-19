import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";

const QuestMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleQuestSettings = () => {
    console.log("quick settigns");
    handleClose();
  }
  return (
    <>
      <IconButton onClick={handleClick} sx={{ position: "absolute", top: 0, right: 0, paddingTop: "0px", color: "#324E7B" }}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        MenuListProps={{
          sx: {
            padding: 0
          }
        }}
      >
        <MenuItem onClick={handleQuestSettings}>Quest Settings</MenuItem>
      </Menu>
    </>
  )
};

export default QuestMenu;