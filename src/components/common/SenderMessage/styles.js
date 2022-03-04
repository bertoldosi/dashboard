import styled from "styled-components";

export const StyleSender = styled.div`
  display: flex;

  & {
    margin-bottom: 1.5rem;
  }
`;

export const StyleSenderHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyleSenderBody = styled.div`
  background-color: #fff;
  color: #626ed4;
  border-radius: 0.5rem;
  padding: 1rem;
  position: relative;
  margin-left: 1.5rem;

  span {
    font-weight: 600;
  }

  p {
    margin: 1rem 0 0 0;
  }

  &::before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;

    border-left: 1.5rem solid transparent;
    border-right: 1.5rem solid transparent;
    border-top: 1.5rem solid #fff;
    border-bottom: 1.5rem solid transparent;
    top: 0;
    left: -1.5rem;
  }
`;
