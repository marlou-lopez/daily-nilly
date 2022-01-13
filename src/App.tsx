import { Grid } from "@mui/material";
import "./App.css";
import Feed from "./components/Feed";
import FeedBody from "./components/FeedBody";
import FeedHeader from "./components/FeedHeader";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <Grid
      sx={{
        bgcolor: "background.default",
        display: "flex",
        width: "100%",
        minHeight: "100%",
      }}
    >
      <Header />
      {/* Left sidenav */}
      <LeftSidebar />
      {/* Main */}
      <Feed>
        <FeedHeader>test</FeedHeader>
        <FeedBody>test</FeedBody>
      </Feed>
      {/* Right sidenav */}
      <RightSidebar />
    </Grid>
  );
}

export default App;
