import { mobileS, tablet } from "@Constants/devices";
import styled from "styled-components";

export const StyleContainerLeft = styled.div`
  border-left: dashed 3px #323a4e;
  border-bottom: dashed 3px #323a4e;
  position: relative;
  padding: 6rem;
  margin: 0 4rem;
  color: #fff;

  > span {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 2rem;
    position: absolute;
    background-color: #626ed4;
    left: -3.5rem;
    border-radius: 0.6rem;

    strong {
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }

    p {
      margin: 0;
    }
  }

  > div {
    width: 100%;
    max-width: 60rem;
    padding: 2rem;
    background-color: #323a4e;
    border-radius: 0.6rem;

    strong {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.3rem;
      line-height: 2rem;
    }
  }

  @media ${mobileS} {
    padding: 4rem;
    margin: 0 2rem;
  }
`;

export const StyleContainerRight = styled.div`
  display: flex;
  justify-content: end;
  border-right: dashed 3px #323a4e;
  border-bottom: dashed 3px #323a4e;
  position: relative;
  padding: 6rem;
  margin: 0 4rem;
  color: #fff;

  > span {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 2rem;
    position: absolute;
    background-color: #626ed4;
    right: -3.5rem;
    border-radius: 0.6rem;

    strong {
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
    }

    p {
      margin: 0;
    }
  }

  > div {
    width: 100%;
    max-width: 60rem;
    padding: 2rem;
    background-color: #323a4e;
    border-radius: 0.6rem;

    strong {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.3rem;
      line-height: 2rem;
    }
  }

  @media ${mobileS} {
    padding: 4rem;
    margin: 0 2rem;
  }
`;
