import { Box } from "@mui/material";

const FeedBody: React.FC = ({children}) => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        padding: 2,
        width: "inherit",
        color: "text.primary"
      }}
    >
      {children}
    </Box>
  );
};

export default FeedBody;
