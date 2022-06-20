import styled from "styled-components";

export const Card = styled.li`
    width: 100%;
    background-color: #121214;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: .5rem;
    border-radius: 6px;
    padding: 1.5rem;
    font-family: "Inter", sans-serif;
    h3 {
        color: white;
        font-weight: 700;
        font-size: 1rem;
    }
    .CardsInfos {
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
        color: #868E96;
        font-size: .8rem;
        }
        img {
            width: 16px;
            height: 16px;
            cursor: pointer;
        }
    }
    @media (max-width: 440px) {
        flex-direction: column;
        justify-content: center;
        h3 {
            margin-bottom: 5px;
        }
    }
`