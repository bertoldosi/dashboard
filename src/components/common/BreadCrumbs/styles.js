import styled from "styled-components";

export const Container = styled.nav`
  padding: 1.6rem 0;
  color: ${(props) => props.theme.breadcrumb_color};

  ol {
    display: flex;
    padding: 0;
    margin: 0;
    margin-top: 0.5rem;

    li {
      display: flex;
      align-items: center;
      a {
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.breadcrumb_color};
      }
    }

    li:last-child {
      a {
        cursor: default;
        color: ${(props) => props.theme.breadcrumb_color_opacity};
      }
    }
  }
`;
