import styled, {css} from 'styled-components'

export const Container = styled.div`
    text-align: left;
    width: 100%;
    font-family: "Inter", sans-serif;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 10px;
    span {
        font-size: .8rem;
        span {
            ${props => props.isErrored && css `
            color: #c53030;
            font-style: italic;
            `}
        }
    }
    input {
        width: 100%;
        height: 48px;
        border-radius: 6px;
        border: none;
        outline: none;
        padding: 1rem;
        background-color: #343B41;
        font-size: 1rem;
        color: white;
    }
    input::placeholder {
        opacity: .5;
        color: #868E96;
    }
    input:focus::placeholder {
        opacity: 1;
    }
`