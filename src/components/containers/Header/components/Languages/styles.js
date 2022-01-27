import { mobileM, mobileS } from "@Constants/devices";
import styled from "styled-components";

export const StyleLanguagesContent = styled.ul`
  background-color: ${(props) => props.theme.header_background_emphasis};
  border-radius: 0.5rem;

  padding: 1rem 0rem;
  li {
    min-width: 15rem;
    display: flex;
    align-items: center;
    padding: 1rem;
    cursor: pointer;

    transition: 0.5s;

    &:hover {
      background-color: ${(props) => props.theme.header_background_hover};
    }

    a {
      margin-left: 1rem;
      color: ${(props) => props.theme.color};
    }
  }
`;
