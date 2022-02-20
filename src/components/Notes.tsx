import { TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { INotes, useNotes } from "../contexts/notes-context";
import { v4 as uuid } from "uuid";

const NoteForm: React.FC<Pick<INotes, "id" | "content">> = ({
  id: selectedId,
  content: selectedContent,
}) => {
  const [content, setContent] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null)
  const { dispatch } = useNotes();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedContent) {
      dispatch({
        type: "edit",
        payload: {
          id: selectedId,
          content,
        },
      });
    } else {
      dispatch({
        type: "add",
        payload: {
          id: uuid(),
          content,
          date: new Date(),
        },
      });
    }

    setContent("");
  };

  useEffect(() => {
    if (selectedContent) {
      setContent(selectedContent);
      inputRef?.current?.focus();
    }
  }, [selectedContent]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.currentTarget.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Typography variant="subtitle1">Add notes for the day</Typography>
        <TextField
          value={content}
          onChange={handleChange}
          fullWidth
          data-testid="notes-textfield"
          inputProps={{
            "data-testid": "notes-textfield-input",
          }}
          inputRef={inputRef}
        />
      </form>
    </>
  );
};

export default NoteForm;
