import styled from "styled-components";
import { tablet } from "../../../constants/devices";

export const StyleContainer = styled.header`
  width: 100%;
  height: 7rem;
  display: flex;
  background-color: ${(props) => props.theme.header_background};
  color: ${(props) => props.theme.header_color};
`;

export const StyleContainerLogo = styled.header`
  width: 24rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  background-color: ${(props) => props.theme.sidebar_background};

  @media ${tablet} {
    display: none;
  }
`;

export const StyleMenuBar = styled.div`
  display: flex;
  align-items: center;
`;
export const StyleMenuContent = styled.div`
  width: 100%;
`;
