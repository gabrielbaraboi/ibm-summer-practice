import styled from "styled-components";

export const BackgroundPage = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(360deg, #74718b, #1d1b31);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Group = styled.div`
    margin-bottom: 30px;
    p {
        float: left;
        
    }
`;

export const InputLink = styled.input`
    float: right;
`;

export const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 10;
    color: white;
`;

export const ModalContent = styled.div`
    display: block;
    form {
        display:block;
        width: 100%;
        height: 100%;
    }
    button {
        text-align: center;
        transition-duration: 0.4s;
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
        cursor: pointer;
        margin-left: 5px;
        margin-top: 10px;
        float: left;
        &:hover {
            background-color: whitesmoke;
            color: black;
        }
    }
    textarea {
        resize: none;
        width: 90%;
        height: 160px;
        min-width 300px;
        min-height: 150px;
    }
`;

export const CloseModalButton = styled.button`
    background-color: white;
    border: none;
    color: black;
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 10px;
    width: 24px;
    height: 24px;
    transition-duration: 0.4s;
    z-index: 10;
    &:hover {
        background-color: black;
        color: white;
    }
`;
