import BreadCrumbs from "@Common/BreadCrumbs";
import DashboardContainer from "@Containers/Dashboard";

function Dashboard() {
  return (
    <>
      <BreadCrumbs title="Dashboard" resumePage="Welcome to Dashboard" />
      <DashboardContainer />
    </>
  );
}

export default Dashboard;
