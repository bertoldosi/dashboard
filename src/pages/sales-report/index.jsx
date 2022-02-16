import BreadCrumbs from "@Common/BreadCrumbs";
import ContainerSalesReport from "@Containers/SalesReport";

function SalesReport() {
  return (
    <>
      <BreadCrumbs title="Sales Report" resumePage="Welcome to Sales Report" />
      <ContainerSalesReport />
    </>
  );
}

export default SalesReport;
