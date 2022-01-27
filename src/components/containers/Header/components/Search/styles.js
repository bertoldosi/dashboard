import { mobileS } from "@Constants/devices";
import styled from "styled-components";

export const StyleContainer = styled.div`
  @media ${mobileS} {
    display: none;
  }
`;

export const StyleInputContainer = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.header_background_click};
  border-radius: 3rem;
  padding: 0rem 1.2rem;
  margin-right: 1rem;

  input {
    width: 100%;
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

  @media ${mobileS} {
    margin: 1rem;
    background-color: ${(props) => props.theme.header_background_emphasis};
    height: 35px;
  }
`;

export const StyleDropdown = styled.div`
  display: none;
  @media ${mobileS} {
    display: initial;
  }
`;
