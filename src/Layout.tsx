import { AppBar, Container, Slide, Toolbar, useScrollTrigger } from "@mui/material";
import BottomNav from "./components/BottomNav";

interface IHideOnScroll {
  children: React.ReactElement
}

const HideOnScroll = ({ children }: IHideOnScroll) => {
  const trigger = useScrollTrigger();
  return (
    <Slide in={!trigger}>
      {children}
    </Slide>
  );
}

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            ONELESS
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container maxWidth="md" sx={{
        bgcolor: "background.default",
      }}>
        { children }
      </Container>
      <BottomNav />
    </>
  )
};

export default Layout;