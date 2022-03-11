import styled from "styled-components";

export const StyleContainer = styled.div`
  width: 40rem;
  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.3rem;
  border: none;
  color: #fff;
  background: linear-gradient(to top right, #43389f 0%, #4ec6ca 100%);
`;

export const StyleContent = styled.div`
  span {
    text-align: center;

    h1 {
      font-size: 5rem;
      font-weight: 700;
      font-family: "Courier New", "Courier", sans-serif;
      line-height: 5rem;
      margin: 0;
      text-transform: uppercase;
    }

    h3 {
      font-size: 1.5rem;
      font-family: "Courier New", "Courier", sans-serif;
      margin: 0;
      text-transform: uppercase;
    }
  }
`;

export const StyleNumber = styled.div`
  height: 5.5rem;
  display: flex;
  margin-bottom: 1rem;
  position: relative;

  & div:nth-child(1) {
    width: 1rem;
    height: 2rem;
    border-radius: 0.2rem;
    background-color: #fff;
    box-shadow: 0 0 13px 0 rgb(0 0 0 / 20%);
    transform: rotate(50deg);
    position: absolute;
    left: -0.5rem;
  }

  & div:nth-child(2) {
    width: 1.2rem;
    height: 5.5rem;
    z-index: 5;
    background-color: #fff;
    box-shadow: 0 0 13px 0 rgb(0 0 0 / 20%);
    border-radius: 0.2rem;
    position: absolute;
    left: 0.3rem;
  }

  & div:nth-child(3) {
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 50%;
    border: 2rem solid #fff;
    box-shadow: 0 0 13px 0 rgb(0 0 0 / 20%);
    position: absolute;
    right: 5rem;
    z-index: 4;
  }

  & div:nth-child(4) {
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 50%;
    border: 2rem solid #fff;
    box-shadow: 0 0 13px 0 rgb(0 0 0 / 20%);
    position: absolute;
    right: 0;
    z-index: 5;
  }
`;
