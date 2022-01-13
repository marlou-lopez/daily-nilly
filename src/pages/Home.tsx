import { Grid } from "@mui/material";
import Notes from "../components/Notes";

const Home: React.FC = () => {
  return (
    <Grid sx={{
      height: '100%'
    }}>
      <Notes />
    </Grid>
  )
};

export default Home;