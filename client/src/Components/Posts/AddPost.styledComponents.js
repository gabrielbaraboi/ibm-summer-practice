import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
`;
export const Container = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    width: 950px;
    max-width: 100%;
    min-height: 500px;
    display: flex;
    margin-top: 20px;
`;

export const InputContainer = styled.div`
    border: 1px;
    background-color: white;
    max-width: 300px;
    min-width: 100px;
    padding: 0;
    .input {
        width: 100%;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: block;
    }
`;
export const InputDescription = styled.div`
    color: white;
    width: 100%;
    /* background-color: ; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
    border: 1px;
    background-color: white;
    margin-bottom: 1rem;
    padding: 0;
`;

export const Div = styled.div`
    overflow: hidden;
    margin-bottom: 5px;
`;

export const Form = styled.form`
    background-color: #d7e4f7;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    width: 100%;
`;

export const Input = styled.input`
    background-color: #ffffff;
    border: none;
    margin: 8px 0;
    width: 100%;
    &:focus {
        outline: none;
    }
`;

export const H1 = styled.h1`
    padding-top: 10px;
    font-weight: bold;
    text-align: center;
`;
export const Flex = styled.div`
    display: flex;
    justify-content: center;
`;

export const ButtonSubmit = styled.input`
    border-radius: 20px;
    width: 200px;
    border: 1px solid #1d1b31;
    background-color: #1d1b31;
    color: #ffffff;
    font-size: 1.8vh;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    cursor: pointer;
    &:active {
        transform: scale(0.95);
    }
    &:focus {
        outline: none;
    }
`;

export const Label = styled.div`
    color: #363636;
    display: block;
    font-size: 1rem;
    font-weight: 500;
    padding: 6px 0 3px 0;
`;
export const Choose = styled.div`
    width: 300px;
`;
export const InputRequirements = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    margin: 10px 0 0 0;
    padding: 0;
    width: 100%;
`;

export const InputRequirement = styled.div`
    align-items: center;
    display: flex;
    margin-bottom: 5px;
    margin-right: 5px;
    padding: 8px 14px;
    background: #f1ebfc;
    border-radius: 8px;
    font-size: 14px;
    color: #7243e4;
    button {
        align-items: center;
        appearance: none;
        background: #ff4949ab;
        border: none;
        border-radius: 50%;
        color: white;
        cursor: pointer;
        display: inline-flex;
        font-size: 12px;
        height: 15px;
        justify-content: center;
        line-height: 0;
        margin-left: 8px;
        padding: 0;
        transform: rotate(45deg);
        width: 15px;
    }
`;
