import { Box, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

const SidebarLink = styled(NavLink)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "48px",
  margin: `0 ${theme.spacing(-1.5)}`,
  padding: `0 ${theme.spacing(1.5)}`,
  color: theme.palette.primary.main,
  cursor: "pointer",
  borderRadius: "16px",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "rgba(25, 52, 94, 0.2)",
  },
}));

const activeLinkStyle: React.CSSProperties = {
  backgroundColor: "#19345E",
  color: "#fff",
};

const LeftSidebar: React.FC = () => {
  return (
    <Sidebar position="left">
      <Box
        sx={{
          py: 0.5,
        }}
      >
        <SidebarLink
          to="/"
          style={({ isActive }) => (isActive ? activeLinkStyle : {})}
        >
          Home
        </SidebarLink>
      </Box>
      <Box
        sx={{
          py: 0.5,
        }}
      >
        <SidebarLink
          to="/quests"
          style={({ isActive }) => (isActive ? activeLinkStyle : {})}
        >
          Quests
        </SidebarLink>
      </Box>
      <Box
        sx={{
          py: 0.5,
        }}
      >
        <SidebarLink
          to="/profile"
          style={({ isActive }) => (isActive ? activeLinkStyle : {})}
        >
          Profile
        </SidebarLink>
      </Box>
    </Sidebar>
  );
};

export default LeftSidebar;
