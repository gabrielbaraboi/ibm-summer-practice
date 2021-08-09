import styled from "styled-components";


export const Body = styled.div`
    padding-top: 30px;
    justify-content: center;
	align-items: center;
	flex-direction: column;
    background: #1d1b31;
    text-align: center;
	height: fit-content;
`

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
    height: 100%;
    text-align: center;
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

export const Label = styled.div`
    display: block;
    font-size: 1rem;
    font-weight: 500;
    padding: 6px 0 3px 0;
    color: gray;
    padding-top: 10px;
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

export const CardStyle = styled.div`
    color: white;
    background : #29283a;
    width: 800px;
    align-items: left;
    border-radius: 0.5rem;
    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
                0 9px 46px 8px rgba(0, 0, 0, 0.025),
                0 11px 15px -7px rgba(0, 0, 0, 0.025);
`
export const TitleCard = styled.div`
    font-size: 30px;
    color: white;
   margin-bottom: 30px;
`

export const ReqButton = styled.button`
    margin-left: 20px;
    background: #6C7A89;
    border: 0;
    padding: 0 1rem;
    color: white;
    border-radius: 5px;
    &:hover {background: white;
            color: #29283a;
            }
`

export const SubmitButton = styled.button`
    flex: 0 0 auto;
    height: 40px;
    padding: 0 2rem;
    margin-top: 30px;
    border: 0;
    border-radius: 5px;
    color: white;
    background: #29283a;
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
    transition: background 0.25;
    &:hover {background: white;
            color: #29283a;
            }
    margin-bottom: 20px;
`