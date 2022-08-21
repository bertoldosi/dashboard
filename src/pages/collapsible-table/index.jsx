import BreadCrumbs from "@Common/BreadCrumbs";
import ContainerTimeline from "@Containers/CollapsibleTable";

function CollapsibleTable() {
  return (
    <>
      <BreadCrumbs
        title="Tabela colapsável"
        resumePage="Uma tabela de controle de gastos"
      />
      <ContainerTimeline />
    </>
  );
}

export default CollapsibleTable;
