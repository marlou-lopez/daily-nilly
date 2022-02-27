import { Typography, Box } from "@mui/material";
import React from "react";
import useNotes from "../../hooks/useNotes";
import useScrollToBottomFetch from "../../hooks/useScrollToBottomFetch";
import Note from "./Note";

const NoteList: React.FC = () => {
  const { data, status, isFetching, hasNextPage, fetchNextPage } = useNotes();

  useScrollToBottomFetch({
    fetchNextPage,
    hasNextPage,
    isFetching
  })
  return (
    <>
      {status === "loading" ? (
        <Typography variant="overline" data-testid="feed-loading">Loading</Typography>
      ) : status === "error" ? (
        <Typography variant="overline" color="red" data-testid="feed-error">Error</Typography>
      ) : (
        <Box>
          {data?.pages.map((page, index) => (
            // Figure out why there's still a warning about unique key
            // tried uuid - still have warning
            <React.Fragment key={index}>
              {page?.map((note) => (
                <Note {...note} />
              ))}
            </React.Fragment>
          ))}
          {isFetching && <Typography variant="caption">Fetching posts</Typography>}
        </Box>
      )}
    </>
  )
};

export default NoteList;