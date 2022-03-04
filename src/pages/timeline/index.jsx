import BreadCrumbs from "@Common/BreadCrumbs";
import ContainerTimeline from "@Containers/Timeline";

function Timeline() {
  return (
    <>
      <BreadCrumbs title="Timeline" resumePage="Welcome to Timeline" />
      <ContainerTimeline />
    </>
  );
}

export default Timeline;
