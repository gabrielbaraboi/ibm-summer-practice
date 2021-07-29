import styled,{ css } from "styled-components";

export const PostDiv = styled.div`
    padding: 15px;
`


const gradient = degs => css`
    background:
        linear-gradient(
            ${degs || 130}deg,
            black 0%,
            #7cb5e4 100%
        );
`;

export const Card = styled.div`
    position: relative;
    overflow: hidden;
    width: 800px;
    height: 180px;
    padding: 1rem 0 ;
    border-radius: 0.5rem;
    color: white;
    ${gradient()};
    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
                0 9px 46px 8px rgba(0, 0, 0, 0.025),
                0 11px 15px -7px rgba(0, 0, 0, 0.025);
`;

export const Content = styled.div`
    position: relative;
    z-index: 3;
`;

export const Div = styled.div`
     
    margin-right: 10px;
    float: left;
`;

export const Icon = styled.div`
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    flex: 0 0 auto;
    margin-bottom: 2rem;
    border-radius: 50%;
    font-size: 80px;
    color: white;
    ${gradient()};
    box-shadow:  0 11px 15px -7px rgba(0, 0, 0, 0.25);
`;

export const PostTitle = styled.div`
    font-size: 1.75rem;
`;

export const PostItems = styled.div`
    font-size: 0.75rem;
`;

export const Data = styled.div`
    font-size: 11px;
    text-align: right;
    padding-right: 30px;
    margin-top: 5px;
    &:nth-child(1) {
        margin-top: 0;
        font-size: 14px;
    }
    a {
        color: black;
        transition: all .2s ease-in-out;
    }
    a:hover {
        color: #6672B4;
        text-decoration: underline
    }
`;

export const Group = styled.div`
    float: right;
`

export const FeatureListItem = styled.div`
    margin-bottom: 0.325rem;
    padding-left: 10px;
    display: inline-block; 
    margin-right: 10px;
    border-left: 2px solid white;
`;

export const PostDescription = styled.div`
    font-size: 1.2rem;
`;

export const PostRequirements = styled.div`
    font-size: 0.75rem;
`

export const Author = styled.div`
    font-size: 0.75rem;
    float: right;
    padding-right: 30px;
`

export const ActionButton = styled.button`
    flex: 0 0 auto;
    margin-right: 20px;
    height: 40px;
    padding: 0 2rem;
    float: right;
    border: 0;
    border-radius: 20px;
    color: rgba(0, 0, 0, 0.85);
    background: rgba(225, 255, 255, 0.85);
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
    transition: background 0.25;

    &:hover {background: rgba(255, 255, 255, 1);}
`;
