import { mobileM, mobileS } from "@Constants/devices";
import styled from "styled-components";

export const StyleContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  padding: 0 1rem;
  height: 100%;
  transition: 0.5s;
  background-color: ${(props) =>
    props.isVisible && props.theme.header_background_hover};

  &:hover {
    background-color: ${(props) => props.theme.header_background_hover};
  }

  @media ${mobileS} {
    position: initial;
  }
`;

export const StyleHeader = styled.div`
  height: 7rem;
  display: flex;
  align-items: center;

  strong {
    margin-left: 0.5rem;
  }

  svg {
    margin-left: 0.5rem;
  }

  @media ${mobileM} {
    strong {
      display: none;
    }
  }
`;

export const StyleContent = styled.div`
  display: ${(props) => (props.isVisible ? "initial" : "none")};
  position: absolute;
  top: 7rem;
  right: 0;
  border-radius: 0 0 0.5rem 0.5rem;
  transition: 0.5s;
  background-color: ${(props) => props.theme.header_background_click};

  @media ${mobileS} {
    width: 100%;
  }
`;
