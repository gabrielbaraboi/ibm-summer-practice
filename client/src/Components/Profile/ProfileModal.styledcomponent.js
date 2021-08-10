import styled from "styled-components";

export const BackgroundPage = styled.div`
    width: 100%;
    background: #29283a;
    position: absolute;
    display: flex;
`;

export const Group = styled.div`
    margin-bottom: 2rem;
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
    z-index: 10;
    color: white;
`;

export const ModalContent = styled.div`
    width:100%;
    form {
        width: 100%;
        display:flex;
        flex-direction:column;
    }
    textarea {
        font-size: 1rem;
        width: 100%;
        min-width: 150px;
        resize: none;
        margin-bottom:0.25rem;
    }
    button {
        width: 10%;
        min-width:3rem;
        text-align: center;
        transition-duration: 0.4s;
        padding: 0.5rem 0.5rem;
        background: white;
        color: black;
        border: none;
        cursor: pointer;
        &:hover {
            background-color: whitesmoke;
            color: black;
        }
        @media (max-width: 1000px) {
            width: 3rem;
        }
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
    &:hover {
        background-color: black;
        color: white;
    }
`;
