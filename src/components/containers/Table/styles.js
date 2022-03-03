import styled from "styled-components";

export const StyleContainer = styled.div``;

export const StyleTable = styled.div`
  overflow: auto;

  table {
    width: 100%;
    border-collapse: collapse;

    tr {
      text-align: left;

      th {
        padding: 0rem 0.5rem;
      }

      td {
        padding: 1rem 0.5rem;
        border-bottom: solid 1px #2f374a;
      }
    }
  }
`;

export const StyleName = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0 1rem;
  }
`;
