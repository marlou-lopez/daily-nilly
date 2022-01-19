import { Box, Divider, LinearProgress, Typography } from "@mui/material";

const UserInfo: React.FC = () => {
  return (
    <Box
      sx={{
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
        padding: "8px 0",
        color: "text.primary"
      }}
    >
      <Box
        sx={{
          bgcolor: "background.paper",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            width: "75px",
            height: "75px",
            bgcolor: "primary.main",
          }}
        ></Box>
      </Box>
      <Divider
        sx={{
          margin: "4px 0 8px",
        }}
      />
      <Box
        sx={{
          bgcolor: "background.paper",
        }}
      >
        <Box sx={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          <Typography>Lvl. 1</Typography>
          <Typography>50/100</Typography>
        </Box>
        <LinearProgress
          sx={{
            borderRadius: "16px",
            height: "10px",
          }}
          variant="determinate"
          value={50}
        />
      </Box>
    </Box>
  );
};

export default UserInfo;
