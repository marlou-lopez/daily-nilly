import { Grid } from "@mui/material";
import FeedBody from "../components/FeedBody";
import FeedHeader from "../components/FeedHeader";
import Notes from "../components/Notes";

const Home: React.FC = () => {
  return (
    <>
      <FeedHeader headerTitle="Home">test</FeedHeader>
      <FeedBody>Im Home</FeedBody>
    </>
  );
};

export default Home;
