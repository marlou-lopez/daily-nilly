import { Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNotes } from "../contexts/notes-context";

const Notes: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const { state, dispatch } = useNotes();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch({
      type: "add",
      payload: {
        content: content,
      },
    });

    setContent("");
  };

  const handleChange = (e: any) => {
    console.log(e);
    setContent(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Typography variant="h5">Add notes for the day</Typography>
        <TextField value={content} onChange={handleChange} fullWidth />
      </form>
      <hr />
      <Grid
        sx={{
          overflow: "auto",
        }}
      >
        {state.notes.map((x) => (
          <Card variant="outlined">
            <CardContent>{x.content}</CardContent>
          </Card>
        ))}
      </Grid>
    </>
  );
};

export default Notes;
