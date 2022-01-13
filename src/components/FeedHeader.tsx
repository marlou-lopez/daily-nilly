import { Box } from "@mui/material";

const FeedHeader: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: "72px",
        paddingBottom: 2,
        bgcolor: "background.default",
      }}
    >
      <Box
        sx={{
          padding: 2,
          width: "100%",
          bgcolor: "background.paper",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px"
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default FeedHeader;
