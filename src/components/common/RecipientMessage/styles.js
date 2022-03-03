import styled from "styled-components";

export const StyleRecipient = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 1.5rem;
`;

export const StyleRecipientHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyleRecipientBody = styled.div`
  background-color: #363e54;
  color: #626ed4;
  border-radius: 0.5rem;
  padding: 1rem;
  position: relative;
  margin-right: 1.5rem;

  span {
    font-weight: 600;
  }

  p {
    margin: 1rem 0 0 0;
    color: #fff;
  }

  &::before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;

    border-left: 1.5rem solid transparent;
    border-right: 1.5rem solid transparent;
    border-top: 1.5rem solid #363e54;
    border-bottom: 1.5rem solid transparent;
    top: 0;
    right: -1.5rem;
  }
`;
