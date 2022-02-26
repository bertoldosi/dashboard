import styled from "styled-components";

export const StyleContainer = styled.div``;

export const StyleTable = styled.table`
  border-collapse: collapse;
  overflow-x: auto !important;
  tr {
    text-align: left;

    td {
      padding: 1rem 0;
      border-bottom: solid 1px #2f374a;
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
