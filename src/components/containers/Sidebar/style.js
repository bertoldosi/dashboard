import styled from "styled-components";

export const Container = styled.aside`
  height: calc(100vh - 7rem);
  position: relative;

  @media (max-width: 992px) {
    width: 7rem;
    background-color: var(--bs-dark);
    color: var(--bs-blue-grey);
  }
`;

export const Title = styled.li`
  @media (max-width: 992px) {
    display: none;
  }
`;

export const MenuTitle = styled.a`
  @media (max-width: 992px) {
    width: min-content;
    display: flex;
    align-items: center;
    position: relative;
    padding: 1.5rem 2rem;
    cursor: pointer;

    &:hover {
      width: 21rem;
      background-color: var(--bs-gray);
      color: var(--bs-dark-light);

      span {
        display: initial;
        background-color: var(--bs-gray);
        color: var(--bs-dark-light);
      }
    }

    /* 
    & ~ ul {
      display: initial;
      span {
      }
    } */

    svg {
      font-size: 2rem;
      margin-left: 0.4rem;
      margin-right: 2rem;
    }

    span {
      display: none;
      background-color: var(--bs-dark);
      padding-left: 2.5rem;
    }
  }
`;

export const MenuSub = styled.ul`
  @media (max-width: 992px) {
    display: none;
    width: 18rem;
    position: absolute;
    left: 7rem;
    background-color: var(--bs-dark);

    &:hover {
      display: initial;
    }

    ${MenuTitle}:hover ~ & {
      display: block;
    }

    li {
      padding: 1.5rem 2rem;
      cursor: pointer;

      &:hover {
        color: var(--bs-dark-light);
      }
    }
  }
`;
