import styled from "styled-components";

export const StyleContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0rem 1rem;
  position: relative;
  padding: 0rem 1.2rem;
  background-color: ${(props) =>
    props.isVisible && props.theme.header_background_click};

  > div {
    display: flex;
    align-items: center;

    cursor: pointer;

    > span {
      margin: 0.8rem;
    }

    svg {
      font-size: 1.2rem;
    }
  }
`;

export const StyleElement = styled.div`
  width: max-content;
  height: 100%;
  display: ${(props) => (props.isVisible ? "flex" : "none")} !important;
  flex-direction: column;
  position: absolute;
  right: 0;
  bottom: -7rem;
`;
