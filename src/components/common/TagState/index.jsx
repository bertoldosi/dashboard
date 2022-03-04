import { StyleContainer } from "./styles";

function TagState({ name, color }) {
  return (
    <StyleContainer color={color}>
      <p>{name}</p>
    </StyleContainer>
  );
}

export default TagState;
