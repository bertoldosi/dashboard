import styled from "styled-components";

export const Container = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.header_background_emphasis};
  border-radius: 3rem;
  padding: 0rem 1.2rem;

  input {
    border: none;
    background: transparent;
    outline: none;
    color: #9ca8b3;
    margin: 0rem 1rem;
    font-size: 1.4rem;

    &::placeholder {
      color: #9ca8b3;
      font-size: 1.4rem;
    }
  }
`;
