import BreadCrumbs from "@Common/BreadCrumbs";
import ContainerCardControl from "@Containers/CardControl";
import monthly_expenses from "./tableItems";

function CardControl() {
  return (
    <>
      <BreadCrumbs
        title="Controle de cartões"
        resumePage="Controle de gasto nos cartões"
      />
      <ContainerCardControl monthly_expenses={monthly_expenses} />
    </>
  );
}

export default CardControl;
