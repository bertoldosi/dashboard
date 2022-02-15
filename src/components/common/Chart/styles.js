import { laptop } from "@Constants/devices";
import styled from "styled-components";

export const StyleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyleContainerChart = styled.div`
  max-width: 60rem;
  width: 100%;
  height: 30rem;

  @media ${laptop} {
    background-color: red;
  }
`;

export const StyleContainerPie = styled.div`
  width: 20rem;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h6 {
    font-size: 1.4rem;
    margin-bottom: 2.4rem;
  }

  h2 {
    margin-bottom: 0.8rem;
  }

  p {
    text-align: center;
    margin: 0;
    margin-bottom: 4rem;
  }
`;
