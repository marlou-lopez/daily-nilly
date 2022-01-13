import { Box, Paper, TextField, Typography } from "@mui/material";

const Feed: React.FC = () => {
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
        <Box
          sx={{
            position: "sticky",
            top: "72px",
            paddingBottom: "16px",
            backgroundColor: "#f5f6fb",
          }}
        >
          <Box
            sx={{
              padding: "16px",
              width: "100%",
              backgroundColor: "#fff",
              borderRadius: "16px 16px 0 0"
            }}
          >
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
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "16px",
            width: "inherit",
          }}
        >
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
        </Box>
      </Box>
    </Box>
  );
};

export default Feed;
