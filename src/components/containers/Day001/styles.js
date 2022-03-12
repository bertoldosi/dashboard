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

export const StyleNumber = styled.div`
  height: 5.7rem;
  display: flex;
  margin-bottom: 5.5rem;
  position: relative;

  & div:nth-child(1) {
    width: 2rem;
    height: 4rem;

    border-radius: 0.2rem;
    background-color: #fff;
    box-shadow: 0 0 13px 0 rgb(0 0 0 / 20%);
    transform: rotate(50deg);
    position: absolute;
    left: -1rem;
  }

  & div:nth-child(2) {
    width: 2.2rem;
    height: 9.8rem;
    z-index: 6;
    background-color: #fff;
    box-shadow: 0 0 13px 0 rgb(0 0 0 / 20%);
    border-radius: 0.2rem;
    position: absolute;
    left: 0.5rem;
  }

  & div:nth-child(3) {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    border: 2.2rem solid #fff;
    box-shadow: 0 0 13px 0 rgb(0 0 0 / 20%);
    position: absolute;
    right: 8rem;
    z-index: 5;
  }

  & div:nth-child(4) {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    border: 2.2rem solid #fff;
    box-shadow: 0 0 13px 0 rgb(0 0 0 / 20%);
    position: absolute;
    right: 0;
    z-index: 4;
  }
`;

export const StyleFooter = styled.div`
  text-align: center;

  h1 {
    font-size: 8rem;
    font-weight: 700;
    font-family: "Courier New", "Courier", sans-serif;
    line-height: 4.2rem;
    text-transform: uppercase;
  }

  h3 {
    font-size: 2.3rem;
    font-family: "Courier New", "Courier", sans-serif;
    text-transform: uppercase;
  }
`;
