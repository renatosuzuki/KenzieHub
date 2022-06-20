import styled, { keyframes } from "styled-components";

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px)
    }
    to {
        opacity: 1;
        transform: translateX(0px)
    }
`;

export const Container = styled.div`
  height: 114vh;
  background-color: #121214;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 850px;
  background-color: #212529;
  margin: 2rem;
  animation: ${appearFromLeft} 1.2s;
  @media (max-width: 450px) {
    width: 300px;
  }
  @media (max-width: 300px) {
    height: 890px;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #121214;
  padding: 1rem;

  @media (max-width: 295px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      margin-top: 8px;
    }
  }

  img {
    width: 123px;
    height: 22px;
  }

  button {
    background-color: #212529;
    color: white;
    border-radius: 4px;
    border: none;
    width: 4rem;
    height: 35px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 0.7rem;
    letter-spacing: 1.2px;
  }
  button:hover {
    background-color: #ff577f;
  }
`;

export const ContentMain = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

    .ContentMainHeader {
        font-family: "Inter", sans-serif;
        text-align:center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 60px;
        h1 {
            color: white;
            font-weight: 700;
            font-size: 1.3rem;
        }
        span {
            color: #868E96;
            font-size: .7rem;
        }
    }

    .ContentMainForm {
        width: 100%;
        padding: 1rem;
        font-family: "Inter", sans-serif;
        color: white;

        button {
            width: 100%;
            font-weight: 500;
            font-size: 1rem;
            height: 48px;
            background-color: #59323F;
            border: none;
            border-radius: 6px;
            color: white;
        }
        button:hover {
            background-color: #FF577F;
        }
    }
`;
