import FeedBody from "../components/FeedBody";
import FeedHeader from "../components/FeedHeader";

const Quests: React.FC = () => {
  return (
    <>
      <FeedHeader headerTitle="Quests">Quest Header</FeedHeader>
      <FeedBody>
        Quests
      </FeedBody>
    </>
  );
};

export default Quests;
