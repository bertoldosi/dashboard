import styled from "styled-components";

export const StyleContainer = styled.div``;

export const StyleCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const StyleChart = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const StyleChartEarning = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 1330px) {
    flex-direction: column;
    background-color: rebeccapurple;
    justify-content: center;
    align-items: center;
  }
`;

export const StylAnalytic = styled.div``;

export const StyleAreaChartFillByValue = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  border-bottom: 0.1px solid ${(props) => props.theme.color};
  padding-bottom: 2rem;
`;

export const StyleAreaChartFillByValueLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  span {
    margin-bottom: 3rem;
  }
`;
