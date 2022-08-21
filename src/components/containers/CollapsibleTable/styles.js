import styled from "styled-components";

export const Scontent = styled.div`
  display: flex;
  justify-content: center;
`;

export const STable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    tr {
      font-size: 1.6rem;
      text-align: left;

      th {
        padding: 2rem 1rem;

        &:last-child {
          text-align: end;
        }
      }
    }
  }

  tbody {
    tr {
      border: solid 1px ${(props) => props.theme.header_color};
      transition: background 0.3s;

      td {
        padding: 2rem 1rem;

        &:last-child {
          text-align: end;
        }
      }
    }
  }
`;

export const STableCollapsed = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    tr {
      font-size: 1.2rem;
      text-align: left;

      th {
        border: solid 1px ${(props) => props.theme.header_color};
        padding: 1rem;

        &:last-child {
          text-align: center;
        }
      }
    }
  }

  tbody {
    tr {
      text-align: left;

      td {
        padding: 1rem;
        border: solid 1px ${(props) => props.theme.header_color};

        &:last-child {
          text-align: center;
        }
      }
    }
  }
`;
