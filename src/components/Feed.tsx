import { Box} from "@mui/material";
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
      </Box>
    </Box>
  );
};

export default Feed;
