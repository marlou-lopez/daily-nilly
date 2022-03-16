import { Card, CardHeader, CardContent, Box, styled, Grid, IconButton, Typography } from "@mui/material";
import { INotes } from "./types"
import NoteMenu from "./NoteMenu";
import Circle from "@mui/icons-material/Circle"
import MoreVertIcon from '@mui/icons-material/MoreVert';

const StyledBox = styled(Box)({
  boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: "column",
  padding: '16px'
});

const Note: React.FC<INotes> = ({ id, date, body }) => {
  return (
    <StyledBox>
      <Grid sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
      }}>
        <Grid sx={{
          display: "flex",
          alignItems: "center"
        }}>
          <Circle sx={{ color: "green", marginRight: '16px' }} />
          <Typography variant="button">
            April 1, 2021
          </Typography>
        </Grid>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Grid>
      <Grid>
        {body}
      </Grid>
    </StyledBox>
    // <Card
    //   sx={{
    //     mb: 1,
    //     bgcolor: "background.default",
    //   }}
    //   variant="outlined"
    //   key={id}
    //   data-testid={`note-${id}`}
    // >
    //   <CardHeader
    //     avatar={
    //       <Circle sx={{
    //         color: "green"
    //       }}/>
    //     }
    //     subheader="April 1, 2021"
    //     title="Title"
    //     action={
    //       <NoteMenu
    //         // handleEdit={handleEdit}
    //         // handleDelete={handleDelete}
    //         handleEdit={() => console.log('edit')}
    //         handleDelete={() => console.log('delete')}
    //         id={id}
    //       />
    //     }
    //   />
    //   <CardContent data-testid={`note-${id}-content`}>{body}</CardContent>
    // </Card>
  )
};

export default Note;