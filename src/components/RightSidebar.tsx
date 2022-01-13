import Sidebar from "./Sidebar";
import UserInfo from "./UserInfo";

const RightSidebar: React.FC = () => {
  return (
    <Sidebar position="right">
      <UserInfo />
    </Sidebar>
  );
};

export default RightSidebar;
