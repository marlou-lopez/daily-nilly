import { Box, Typography } from "@mui/material";

interface IFeedHeader {
  headerTitle?: string;
}

const FeedHeader: React.FC<IFeedHeader> = ({ children, headerTitle }) => {
  return (
    <Box
      sx={{
        position: "sticky",
        top: "72px",
        paddingBottom: 2,
        bgcolor: "background.default",
        zIndex: 100
      }}
    >
      <Box
        sx={{
          padding: 2,
          width: "100%",
          bgcolor: "background.paper",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
          color: "text.primary",
        }}
      >
        {headerTitle && (
          <>
            <Typography
              variant="h5"
              sx={{
                color: "primary.main",
              }}
            >
              {headerTitle}
            </Typography>
          </>
        )}
        {children}
      </Box>
    </Box>
  );
};

export default FeedHeader;
