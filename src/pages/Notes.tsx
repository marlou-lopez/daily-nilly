import { Box, Fab } from "@mui/material";
import { NoteList } from "../features/Notes";
import EditIcon from '@mui/icons-material/Edit';

const Notes: React.FC = () => {
  return (
    <Box sx={{
      my: 2
    }}>
      <NoteList />
      <Fab
        aria-label="Create note"
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 75,
          right: 25
        }}
      >
        <EditIcon />
      </Fab>
    </Box>
  )
};

export default Notes;