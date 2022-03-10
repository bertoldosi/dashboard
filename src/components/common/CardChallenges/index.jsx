import BreadCrumbs from "@Common/BreadCrumbs";
import Card from "@Common/Card";
import { StyleContainer } from "./styles";

function CardChallenges({ children, title }) {
  return (
    <>
      <BreadCrumbs title={title} />
      <Card>
        <StyleContainer>{children}</StyleContainer>
      </Card>
    </>
  );
}

export default CardChallenges;
