import { Container, Grid } from "@mui/material";
import BottomNav from "./components/BottomNav";
import Header from "./components/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <Grid sx={{
      bgcolor: "background.default",
      minHeight: "inherit"
    }}>
      <Header />
      <Container maxWidth="md" sx={{
        bgcolor: "background.default",
      }}>
        {children}
      </Container>
      <BottomNav />
    </Grid>
  )
};

export default Layout;