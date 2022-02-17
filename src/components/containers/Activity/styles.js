import styled from "styled-components";

export const StyleContainer = styled.div`
  > div:last-child {
    div:first-child {
      div:last-child {
        display: none;
      }
    }
  }
`;

export const StyleContent = styled.div`
  display: flex;
`;

export const StyleTimeLine = styled.div`
  width: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;

  div:first-child {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: #29a499;
  }

  div:last-child {
    width: 0.2rem;
    min-height: 5rem;
    height: max-content;
    background-color: #32394e;
  }
`;

export const StyleLabel = styled.div`
  span {
  }

  p {
    margin: 0.5rem 0;
  }
`;
