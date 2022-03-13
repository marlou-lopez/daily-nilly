import { Card, CardHeader, CardContent } from "@mui/material";
import { INotes } from "./types"
import NoteMenu from "./NoteMenu";
import Circle from "@mui/icons-material/Circle"

const Note: React.FC<INotes> = ({ id, date, body }) => {
  return (
    <Card
      sx={{
        mb: 1,
        bgcolor: "background.default",
      }}
      variant="outlined"
      key={id}
      data-testid={`note-${id}`}
    >
      <CardHeader
        avatar={
          <Circle sx={{
            color: "green"
          }}/>
        }
        subheader="April 1, 2021"
        title="Title"
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