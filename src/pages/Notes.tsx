import { Box, Button, Drawer, SpeedDialIcon, Grid, SpeedDial, SpeedDialAction, Typography } from "@mui/material";
import { NoteList } from "../features/Notes";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";


const actions = [
  { icon: <EditIcon />, name: 'Create' },
  { icon: <EditIcon />, name: 'Save' },
  { icon: <EditIcon />, name: 'Print' },
  { icon: <EditIcon />, name: 'Share' },
];


const Notes: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);


  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(!openDrawer)
  };


  return (
    <Box sx={{
      my: 2
    }}>
      <NoteList />
      <SpeedDial
        ariaLabel="speed dial"
        sx={{
          position: 'fixed',
          bottom: 75,
          right: 25
        }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen={true}
          />
        ))}
      </SpeedDial>
      <Drawer
        PaperProps={{
          sx: {
            height: "100vh"
          }
        }}
        anchor="bottom"
        open={openDrawer}
        onClose={toggleDrawer}
      >
        <Grid>
          <Grid container alignItems="center" justifyContent="space-between">
            <Typography>Add note</Typography>
            <Button onClick={toggleDrawer}>X</Button>
          </Grid>
        </Grid>
      </Drawer>
    </Box>
  )
};

export default Notes;