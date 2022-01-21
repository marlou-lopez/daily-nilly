import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import FeedBody from "../components/Feed/FeedBody";
import FeedHeader from "../components/Feed/FeedHeader";
import NoteForm from "../components/Notes";
import { INotes, useNotes } from "../contexts/notes-context";
import { relativeTimeFromDates } from "../utils/date-utils";
import CardMenu from "../components/CardMenu";

const Home: React.FC = () => {
  const [selectedNote, setSelectedNote] = useState<Pick<INotes, "id" | "content">>({
    id: "",
    content: ""
  });

  const {
    state: { notes },
    dispatch,
  } = useNotes();

  const handleDelete = (id: INotes["id"]) => {
    dispatch({
      type: "delete",
      payload: {
        id,
      },
    });
  };

  const handleEdit = (id: INotes["id"]) => {
    const note = notes.find(note => note.id === id);
    if (note) {      
      setSelectedNote({id: note.id, content: note.content});
    }
  };

  return (
    <>
      <FeedHeader headerTitle="Home">
        <NoteForm id={selectedNote.id} content={selectedNote.content} />
      </FeedHeader>
      <FeedBody>
        {notes.length ? (
          notes.map((note) => (
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
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    id={note.id}
                  />
                }
              />
              <CardContent data-testid={`note-${note.id}-content`}>{note.content}</CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="overline" data-testid="feed-placeholder">Want to note something?</Typography>
        )}
      </FeedBody>
    </>
  );
};

export default Home;
