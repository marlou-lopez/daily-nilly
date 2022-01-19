import FeedBody from "../components/FeedBody";
import FeedHeader from "../components/FeedHeader";

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