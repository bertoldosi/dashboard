import styled from "styled-components";

export const StyleContainer = styled.div`
  width: 100%;
  background-color: #626ed4;
  border-radius: 0.3rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 13px 0 rgb(0 0 0 / 20%);

  flex-grow: 1;
  flex-basis: 15rem;
`;

export const StyleHeader = styled.div`
  padding: 2rem 0 0 2rem;

  display: flex;
  justify-content: space-between;
`;
export const StyleInfo = styled.div`
  display: flex;
`;
export const StyleIcon = styled.div`
  color: #ffffff;
  background-color: #7984db;
  padding: 2rem;

  border-radius: 0.3rem;
`;

export const StyleLabel = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;

  strong {
    flex: 1;
    color: rgba(255, 255, 255, 0.5);
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
    font-size: 2.4rem;
  }
`;

export const StyleTag = styled.strong`
  width: 7rem;
  height: 2.7rem;
  display: flex;
  align-items: center;
  justify-content: end;
  background-color: ${(props) => props.colorTag};
  padding-right: 1rem;
  color: #ffffff;

  -webkit-clip-path: polygon(
    100% 0,
    100% 50%,
    100% 100%,
    0 100%,
    24% 50%,
    6% 0
  );
  clip-path: polygon(100% 0, 100% 50%, 100% 100%, 0 100%, 24% 50%, 6% 0);
`;

export const StyleFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem;

  color: rgba(255, 255, 255, 0.5);

  svg {
    cursor: pointer;
  }
`;
