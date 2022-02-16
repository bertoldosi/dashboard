import BreadCrumbs from "@Common/BreadCrumbs";
import ContainerActivity from "@Containers/Activity";

function Activity() {
  return (
    <>
      <BreadCrumbs title="Activity" resumePage="Welcome to Activity" />
      <ContainerActivity />
    </>
  );
}

export default Activity;
