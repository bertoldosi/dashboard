import styled from "styled-components";

export const StyleContainer = styled.div`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  justify-content: end;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  position: absolute;
  color: ${(props) => props.theme.rightbar_color};
  background-color: ${(props) => props.theme.rightbar_background_opacity};
`;

export const StyleSidebar = styled.aside`
  width: 28rem;
  background: ${(props) => props.theme.rightbar_background};
  font-weight: 600;
`;

export const StyleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.75rem;

  padding: 2.4rem 1.6rem;
  border-bottom: 0.1rem solid
    ${(props) => props.theme.rightbar_background_opacity};

  svg {
    cursor: pointer;
  }
`;

export const StyleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 1.5rem;

  strong {
    margin-bottom: 1.5rem;
  }

  div {
    cursor: pointer;
    span {
      margin-top: 2rem;
      display: flex;
      align-items: center;
    }

    > div {
      width: 25rem;
      height: 100%;
      margin: 1rem 0;
      border-radius: 0.5rem;
      border: 0.5rem solid ${(props) => props.theme.rightbar_border_color_img};
    }

    input {
      width: 1.3em;
      height: 1.3em;
      background-color: white;
      border-radius: 50%;
      vertical-align: middle;
      border: 1px solid #fff;
      appearance: none;
      -webkit-appearance: none;
      outline: none;
      cursor: pointer;

      &:checked {
        background-color: green;
        border: 1px solid green;
      }
    }
  }
`;
