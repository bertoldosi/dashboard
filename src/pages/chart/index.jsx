import BreadCrumbs from "@Common/BreadCrumbs";
import ContainerChart from "@Containers/Chart";

function Chart() {
  return (
    <>
      <BreadCrumbs title="Chart" resumePage="Welcome to Chart" />
      <ContainerChart />
    </>
  );
}

export default Chart;
