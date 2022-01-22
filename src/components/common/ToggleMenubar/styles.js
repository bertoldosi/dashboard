import styled from "styled-components";
import { tablet } from "../../../constants/devices";

export const StyleToggleHideMenu = styled.div`
  display: none;
  height: min-content;
  width: min-content;
  padding: 0.5rem;

  cursor: pointer;

  div {
    background-color: ${(props) => props.theme.header_color};
    width: 1.8rem;
    height: 0.2rem;
    margin: 0.4rem 0;
  }

  @media ${tablet} {
    display: initial;
  }
`;
