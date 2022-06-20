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
`

export const InputContainer = styled.div`
    width: 100%;
    height: 48px;
    border-radius: 6px;
    padding: 1rem;
    background-color: #343B41;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #F8F9FA;
    input {
        background-color: transparent;
        outline: none;
        border: none;
        width: 100%;
        color: white;
        font-size: 1rem;
        font-family: "Inter", sans-serif;
    }
    input::placeholder {
        opacity: .5;
        color: #868E96;
    }
    input:focus::placeholder {
        opacity: 1;
    }
    svg {
        cursor: pointer;
    }
`