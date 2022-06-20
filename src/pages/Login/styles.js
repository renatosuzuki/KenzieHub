import styled, { keyframes } from "styled-components";

const appearFromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px)
    }
    to {
        opacity: 1;
        transform: translateX(0px)
    }
`;

export const Container = styled.div`
  height: 100vh;
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
  height: 500px;
  background-color: #212529;
  margin: 2rem;
  animation: ${appearFromRight} 1.2s;
  @media (max-width: 450px) {
    width: 300px;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #121214;
  padding: 1rem;
`;

export const ContentMain = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .ContentMainHeader {
    font-family: "Inter", sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h1 {
      color: white;
      font-weight: 700;
      font-size: 1.3rem;
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
      background-color: #ff577f;
      border: none;
      border-radius: 6px;
      color: white;
    }
    button:hover {
      color: #212529;
    }

    .border {
        border: 1px solid #F8F9FA;
    }
  }
  .ContentMainFooter {
    width: 100%;
    height: 110px;
    padding: 1rem;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 0.8rem;

    color: #868e96;
    button {
      width: 100%;
      font-weight: 500;
      font-size: 1rem;
      height: 48px;
      background-color: #868E96;
      border: none;
      border-radius: 6px;
      color: white;
    }
    button:hover {
      background-color: #FF577F;
    }
  }
`;
