import BreadCrumbs from "@Common/BreadCrumbs";
import Dashboard from '@Containers/Dashboard'

export default function Home() {
  return (
    <>
      <BreadCrumbs title="Dashboard" resumePage="Welcome to Dashboard" />
      <Dashboard />
    </>
  );
}
