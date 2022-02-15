import { StyleContainer } from "./styles";

function Card({ children, title }) {
  return (
    <StyleContainer>
      <h4>{title}</h4>
      {children}
    </StyleContainer>
  );
}

export default Card;
