import { Typography, Box, Card, CardHeader, CardContent } from "@mui/material";
import useNotes from "../../hooks/useNotes";
import { relativeTimeFromDates } from "../../utils/date-utils";
import CardMenu from "../CardMenu";

const NoteList: React.FC = () => {
  const { data: notes, status, isFetching } = useNotes();
  console.log("data: ", notes)
  return (
    <>
      {status === "loading" ? (
        <Typography variant="overline" data-testid="feed-loading">Loading</Typography>
      ) : status === "error" ? (
        <Typography variant="overline" color="red" data-testid="feed-error">Error</Typography>
      ) : notes?.length ? (
        <Box>
        {notes.map((note) => (
          <Card
            variant="outlined"
            sx={{
              mb: 1,
              bgcolor: "background.paper",
            }}
            key={note.id}
            data-testid={`note-${note.id}`}
          >
            <CardHeader
              subheader={relativeTimeFromDates(note.date)}
              action={
                <CardMenu
                  // handleEdit={handleEdit}
                  // handleDelete={handleDelete}
                  handleEdit={() => console.log('edit')}
                  handleDelete={() => console.log('delete')}
                  id={note.id}
                />
              }
            />
            <CardContent data-testid={`note-${note.id}-content`}>{note.body}</CardContent>
          </Card>
          ))}
          {isFetching ? <Typography>Backround Updating</Typography> : ""}
        </Box>
      ) : (
        <Typography variant="overline" data-testid="feed-placeholder">Want to note something?</Typography>
      )}
    </>
  )
};

export default NoteList;