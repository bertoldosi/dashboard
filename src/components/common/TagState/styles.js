import styled from "styled-components";

export const StyleContainer = styled.div`
  width: min-content;
  background-color: ${(props) => props.color};
  border-radius: 0.3rem;

  p {
    color: white;
    font-size: 1.2rem;
    padding: 0.2rem;
  }
`;
