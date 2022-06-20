import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    background-color: #121214;
    display: flex;
    align-items: center;
    justify-content: center;
`

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100px)
    }
    to {
        opacity: 1;
        transform: translateX(0px)
    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1100px;
    height: 90%;
    animation: ${appearFromLeft} 1.5s;
    @media (max-width: 1120px) {
        margin: 0 1.5rem; 
    }
`

export const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    border-bottom: 2px solid #212529; 
    button {
        border: none;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: .9rem;
        width: 70px;
        height: 40px;
        background-color: #212529;
        color: white;
        border-radius: 6px;
    }
    button:hover {
        background-color: #FF577F;
        transition: .7s;
    }
`

export const Infos = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 120px;
    font-family: "Inter", sans-serif;
    border-bottom: 2px solid #212529; 
    h1 {
        color: white;
        font-weight: 600;
        font-size: 1.2rem;
    }
    span {
        font-size: .7rem;
        color: #868E96;
    }
`

const Spin = keyframes`
    to {
        transform: rotate(360deg)
    }
`

export const MainContent = styled.main`
    width: 100%;
    height: 488px;
    font-family: "Inter", sans-serif;
    .MainInfos {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        h2 {
            font-weight: 600;
            font-size: 1rem;
            color: white;
            letter-spacing: 1px;
        }
        button {
            background-color: #212529;
            border: none;
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
        }
        button:hover {
            img {
                animation: ${Spin} 1s;
            }
        }
        img{
            width: 15px;
            height: 15px;
        }
    }
`

export const CardsContainer = styled.section`
    width: 100%;
    height: 428px;
    background-color: #212529;
    border-radius: 6px;
    display: flex;
`

export const CardsContent = styled.ul`
    width: 95%;
    margin: 1.5rem;
    min-height: 0px;
    max-height: 370px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: auto;
` 