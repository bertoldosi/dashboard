import styled from "styled-components";
import { mobileS, tablet } from "../../../constants/devices";

export const StyleContainer = styled.header`
  width: 100%;
  height: 7rem;
  display: flex;
  background-color: ${(props) => props.theme.header_background};
  color: ${(props) => props.theme.header_color};
  box-shadow: 0 0 13px 0 rgb(0 0 0 / 20%);

  @media ${mobileS} {
    position: relative;
  }
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
  flex: 1;
  justify-content: space-between;
`;

export const StyleMenuContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0rem 1.5rem 0 0;
`;
