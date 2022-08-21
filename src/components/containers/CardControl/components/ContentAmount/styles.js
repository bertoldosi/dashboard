import styled from "styled-components";

export const Scontent = styled.div`
  width: 100%;
  max-width: 40rem;
  margin-top: 5rem;

  header {
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
    font-weight: 800;
    border-bottom: solid 1px ${(props) => props.theme.header_color};

    margin-bottom: 2rem;

    > span {
      padding: 1rem 0;
    }
  }

  > span {
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px ${(props) => props.theme.header_color};
  }

  footer {
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
    font-weight: 800;
    border-bottom: solid 1px ${(props) => props.theme.header_color};

    margin-top: 4rem;

    > span {
      padding: 1rem 0;
    }
  }
`;
