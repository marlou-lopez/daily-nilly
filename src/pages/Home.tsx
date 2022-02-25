import React, { useState } from "react";
import FeedBody from "../components/Feed/FeedBody";
import FeedHeader from "../components/Feed/FeedHeader";
import NoteForm from "../components/Notes/NoteForm";
import { INotes } from "../contexts/notes-context";

import NoteList from "../components/Notes/NoteList";

const Home: React.FC = () => {
  const [selectedNote, setSelectedNote] = useState<Pick<INotes, "id" | "content">>({
    id: "",
    content: ""
  });

  // const {
  //   state: { notes },
  //   dispatch,
  // } = useNotesContext();



  // const handleDelete = (id: INotes["id"]) => {
  //   dispatch({
  //     type: "delete",
  //     payload: {
  //       id,
  //     },
  //   });
  // };

  // const handleEdit = (id: INotes["id"]) => {
  //   const note = notes.find(note => note.id === id);
  //   if (note) {
  //     setSelectedNote({ id: note.id, content: note.content });
  //   }
  // };
  return (
    <>
      <FeedHeader headerTitle="Home">
        <NoteForm id={selectedNote.id} content={selectedNote.content} />
      </FeedHeader>
      <FeedBody>
        <NoteList />
      </FeedBody>
    </>
  );
};

export default Home;
