import AboutMe from "./AboutMe";
import AddChannel from "./AddChannel";
import ManageChatMembers from "./ManageChatMembers";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="min-w-[22%]  flex justify-between h-screen shadow-xl  flex-col  items-center overflow-x-hidden bg-[#120F13] text-white">
      <AddChannel />

      <ManageChatMembers />
      <AboutMe/>
    </div>
  );
};

export default Sidebar;
