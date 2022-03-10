import { Box, IconButton, Typography, useTheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/NightsStay";
import { useColorMode } from "../contexts/color-mode-context";

const Header: React.FC = () => {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 100,
        paddingBottom: "16px",
        bgcolor: "background.default",
      }}
    >
      <Box
        sx={{
          bgcolor: "primary.main",
        }}
      >
        <Box
          sx={{
            height: "56px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "common.white",
          }}
        >
          <Typography variant="h5">OneLess</Typography>
          {theme.palette.mode === "light" ? (
            <IconButton color="inherit" onClick={toggleColorMode} data-testid="light-mode-btn">
              <LightModeIcon />
            </IconButton>
          ) : (
            <IconButton color="inherit" onClick={toggleColorMode} data-testid="dark-mode-btn">
              <DarkModeIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
