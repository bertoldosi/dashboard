import styled from "styled-components";

export const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.card_background};
  box-shadow: 0 0 13px 0 rgb(0 0 0 / 20%);

  flex-grow: 1;
  flex-basis: 15rem;

  h4 {
    margin-bottom: 2rem;
  }
`;
