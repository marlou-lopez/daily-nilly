import { Box } from "@mui/material";
import UserInfo from "./UserInfo";

const RightSidebar: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "flex-start",
        marginLeft: "16px",
      }}
    >
      <Box
        sx={{
          width: "328px",
        }}
      >
        <Box
          sx={{
            position: "fixed",
            top: "72px",
            height: "calc(100vh - 72px)",
            zIndex: 800,
          }}
        >
          <Box
            sx={{
              height: "100%",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            <Box
              sx={{
                borderRadius: "16px",
                backgroundColor: "#fff",
                padding: "0 16px",
                width: "328px",
              }}
            >
              <UserInfo />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RightSidebar;
