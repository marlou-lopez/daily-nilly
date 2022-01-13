import { Box } from "@mui/material";

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 100,
        paddingBottom: "16px",
        backgroundColor: "#f5f6fb",
      }}
    >
      <Box
        sx={{
          // backgroundColor: "cornsilk", 
          bgcolor: "primary.main"
        }}
      >
        <Box
          sx={{
            height: "56px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            width: "1200px",
          }}
        >
          Dayless
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
