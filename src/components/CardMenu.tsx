import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import { INotes } from "../contexts/notes-context";

interface ICardMenu extends Pick<INotes, "id"> {
  handleDelete: (id: INotes["id"]) => void;
  handleEdit: (id: INotes["id"]) => void;
}

const CardMenu: React.FC<ICardMenu> = ({ handleDelete, handleEdit, id }) => {
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
      <IconButton aria-label="settings" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleEditMenu}>Edit</MenuItem>
        <MenuItem onClick={handleDeleteMenu}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default CardMenu;
