import { Box } from "@mui/material";

interface ISidebar {
  position: "left" | "right";
}

const Sidebar: React.FC<ISidebar> = ({ position, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: position === "left" ? "flex-end" : "flex-start",
        // margin left, margin-right
        mx: 2,
      }}
    >
      <Box
        sx={{
          width: position === "left" ? "232px" : "328px",
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
                bgcolor: "background.paper",
                px: 2,
                width: position === "left" ? "232px" : "328px",
              }}
            >
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
