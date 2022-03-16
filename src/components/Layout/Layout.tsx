import { Container, Grid } from "@mui/material";
import BottomNav from "./BottomNav";
import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <Grid sx={{
      minHeight: "inherit"
    }}>
      <Container maxWidth="md" sx={{
        paddingTop: "16px",
        minHeight: "inherit",
        display: "flex",
        flexDirection: "column",
      }}>
        {children}
      </Container>
      <BottomNav />
    </Grid>
  )
};

export default Layout;