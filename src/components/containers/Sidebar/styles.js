import styled, { css } from "styled-components";
import { tablet } from "../../../constants/devices";

export const StyleContainer = styled.aside`
  width: 24rem;
  min-width: 24rem;
  height: 100%;
  background-color: ${(props) => props.theme.sidebar_background};
  color: ${(props) => props.theme.sidebar_color};
  z-index: 1;

  @media ${tablet} {
    ${(props) =>
      props.hideSidebar
        ? css`
            display: initial !important;
          `
        : css`
            display: none !important;
          `}

    display: none;
    position: absolute;
  }
`;

export const StyleTitle = styled.li`
  text-transform: uppercase;
  font-size: 1rem;
  padding: 1.2rem 2rem;
`;

export const StyleMenuTitle = styled.li`
  user-select: none;
  display: flex;
  align-items: center;
  padding: 1.2rem 2rem;
  cursor: pointer;
  transition: 0.5s;

  svg:first-child {
    margin-right: 1.8rem;
    font-size: 1.8rem;
  }

  span {
    font-size: 1.5rem;
    margin-right: 1.8rem;
  }

  svg:last-child {
    margin-left: auto;
    font-size: 1.5rem;
  }

  background-color: ${({ theme, isActive }) =>
    isActive && theme.sidebar_background_hover};

  &:hover {
    background-color: ${(props) => props.theme.sidebar_background_hover};
    color: ${(props) => props.theme.sidebar_color_hover};
  }
`;

export const StyleSubMenu = styled.ul`
  user-select: none;

  li {
    cursor: pointer;
    padding: 1rem 1rem 1rem 6rem;

    a {
      color: ${(props) => props.theme.sidebar_color};
      text-decoration: none;
      transition: 0.5s;

      &:hover {
        color: ${(props) => props.theme.sidebar_color_hover};
      }
    }
  }
`;
