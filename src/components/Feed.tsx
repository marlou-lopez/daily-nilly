import { Box, Paper, TextField, Typography } from "@mui/material";
import FeedBody from "./FeedBody";
import FeedHeader from "./FeedHeader";

const Feed: React.FC = ({children}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        paddingTop: "72px",
      }}
    >
      <Box
        sx={{
          maxWidth: "100%",
          width: "600px",
        }}
      >
        {children}
        {/* <FeedHeader>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "600",
            }}
            color="primary.main"
          >
            Home
          </Typography>
          <Typography>Add note for the day</Typography>
          <TextField fullWidth />
        </FeedHeader>
        <FeedBody>
          <Paper
            sx={{
              height: "200px",
              marginBottom: "16px",
            }}
          ></Paper>
          <Paper
            sx={{
              height: "200px",
              marginBottom: "16px",
            }}
          ></Paper>
          <Paper
            sx={{
              height: "200px",
              marginBottom: "16px",
            }}
          ></Paper>
          <Paper
            sx={{
              height: "200px",
              marginBottom: "16px",
            }}
          ></Paper>
          <Paper
            sx={{
              height: "200px",
              marginBottom: "16px",
            }}
          ></Paper>
        </FeedBody> */}
      </Box>
    </Box>
  );
};

export default Feed;
