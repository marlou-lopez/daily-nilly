import { Box, Link } from "@mui/material";
import Sidebar from "./Sidebar";

const LeftSidebar: React.FC = () => {
  return (
    <Sidebar position="left">
      <Box
        sx={{
          py: 0.5,
        }}
      >
        <Link
          underline="none"
          sx={{
            display: "flex",
            alignItems: "center",
            height: "48px",
            mx: -1.5,
            px: 1.5,
            cursor: "pointer",
            borderRadius: "16px",
            ":hover": {
              bgcolor: "#eff2ff",
            },
          }}
        >
          Home
        </Link>
      </Box>
      <Box
        sx={{
          py: 0.5,
        }}
      >
        <Link
          underline="none"
          sx={{
            display: "flex",
            alignItems: "center",
            height: "48px",
            mx: -1.5,
            px: 1.5,
            cursor: "pointer",
            borderRadius: "16px",
            ":hover": {
              bgcolor: "#eff2ff",
            },
          }}
        >
          Quests
        </Link>
      </Box>
      <Box
        sx={{
          py: 0.5,
        }}
      >
        <Link
          underline="none"
          sx={{
            display: "flex",
            alignItems: "center",
            height: "48px",
            mx: -1.5,
            px: 1.5,
            cursor: "pointer",
            borderRadius: "16px",
            ":hover": {
              bgcolor: "#eff2ff",
            },
          }}
        >
          Profile
        </Link>
      </Box>
    </Sidebar>
  );
};

export default LeftSidebar;
