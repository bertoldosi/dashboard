import BreadCrumbs from "@Common/BreadCrumbs";
import ContainerChat from "@Containers/Chat";

function Chat() {
  return (
    <>
      <BreadCrumbs title="Chat" resumePage="Welcome to Chat" />
      <ContainerChat />
    </>
  );
}

export default Chat;
