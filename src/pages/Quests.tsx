import FeedBody from "../components/Feed/FeedBody";
import FeedHeader from "../components/Feed/FeedHeader";

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
