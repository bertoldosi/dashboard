import styled from "styled-components";

export const Container = styled.nav`
  padding: 1.6rem;

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
        color: #fff;
      }
    }

    li:last-child {
      a {
        cursor: default;
        color: rgba(239, 242, 247, 0.5);
      }
    }
  }
`;
