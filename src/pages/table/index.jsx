import BreadCrumbs from "@Common/BreadCrumbs";
import ContainerTable from "@Containers/Table";

function Table() {
  return (
    <>
      <BreadCrumbs title="Table" resumePage="Welcome to Table" />
      <ContainerTable />
    </>
  );
}

export default Table;
