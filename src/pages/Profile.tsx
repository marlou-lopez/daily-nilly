import FeedBody from "../components/Feed/FeedBody";
import FeedHeader from "../components/Feed/FeedHeader";

const Profile: React.FC = () => {
  return (
    <>
      <FeedHeader headerTitle="Profile">Profile Header</FeedHeader>
      <FeedBody>
        Profile
      </FeedBody>
    </>
  )
};

export default Profile;