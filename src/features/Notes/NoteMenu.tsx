import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import { INotes } from "./types";

interface ICardMenu extends Pick<INotes, "id"> {
  handleDelete: (id: INotes["id"]) => void;
  handleEdit: (id: INotes["id"]) => void;
}

const NoteMenu: React.FC<ICardMenu> = ({ handleDelete, handleEdit, id }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteMenu = () => {
    handleDelete(id);
    handleClose();
  };

  const handleEditMenu = () => {
    handleEdit(id);
    handleClose();
  }
  return (
    <>
      <IconButton aria-label="settings" onClick={handleClick} data-testid={`menu-icon-${id}`}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        data-testid={`menu-${id}`}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        PaperProps={{
          sx: {
            bgcolor: "background.default",
          }
        }}
      >
        <MenuItem onClick={handleEditMenu} data-testid={`edit-menu-${id}`} >Edit</MenuItem>
        <MenuItem onClick={handleDeleteMenu} data-testid={`delete-menu-${id}`}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default NoteMenu;
