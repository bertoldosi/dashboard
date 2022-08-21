import BreadCrumbs from "@Common/BreadCrumbs";
import ContainerCardControl from "@Containers/CardControl";

function CardControl() {
  return (
    <>
      <BreadCrumbs
        title="Controle de cartões"
        resumePage="Controle de gasto nos cartões"
      />
      <ContainerCardControl />
    </>
  );
}

export default CardControl;
