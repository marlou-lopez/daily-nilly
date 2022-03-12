import { Card, CardHeader, CardContent } from "@mui/material";
import { INotes } from "./types"
import { relativeTimeFromDates } from "../../utils/date-utils";
import NoteMenu from "./NoteMenu";

const Note: React.FC<INotes> = ({ id, date, body }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        mb: 1,
        bgcolor: "background.paper",
      }}
      key={id}
      data-testid={`note-${id}`}
    >
      <CardHeader
        subheader={relativeTimeFromDates(date)}
        action={
          <NoteMenu
            // handleEdit={handleEdit}
            // handleDelete={handleDelete}
            handleEdit={() => console.log('edit')}
            handleDelete={() => console.log('delete')}
            id={id}
          />
        }
      />
      <CardContent data-testid={`note-${id}-content`}>{body}</CardContent>
    </Card>
  )
};

export default Note;