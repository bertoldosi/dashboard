import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.header_background_hover};
  }
`;
