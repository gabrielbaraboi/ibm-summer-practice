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

export const Filter = styled.div`
    width: 25%;
    height: 500px;
    background: rgba(255,255,255,.55);
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 2%), 0 0px 0 1px rgb(10 10 10 / 2%);
    border-radius: 6px;
    padding: 20px;
`

export const FilterTitle = styled.h2`
    color: #1B2942;
    font-size: 24px;
    font-weight: 500;
    overflow: hidden;
    &:after {
        content:"";
        display: inline-block;
        height: 0.5em;
        vertical-align: bottom;
        width: 100%;
        margin-right: -100%;
        margin-left: 10px;
        border-top: 2px solid #e4e4e4;
    }
`

export const FilterCategory = styled.div`
    margin-left: 10px;
    label {
        margin-left: 5px;
    }
`

export const FilterCategoryTitle = styled.h3`
    color: #1B2942;
    font-size: 18px;
    font-weight: 500;
    margin-top: 15px;
    margin-bottom: 8px;
    margin-left: -10px;
`

export const FilterField = styled.div`
    color: #686D88;
    display: block;
    position: relative;
    margin-top: 5px;
    height: 18px;
    &:hover label {
	    color: #000000;
    }
    &:hover .check {
	    border: 2px solid #89CCF6;
    }
    input[type=radio] {
        position: absolute;
        visibility: hidden;
    }
    label {
        display: block;
        position: relative;
        cursor: pointer;
        margin-left: 25px;
        font-weight: 500;
        transition: all .25s ease-in-out;
    }
    input[type=radio]:checked ~ .check {
        border: 2px solid #89CCF6;
    }

    input[type=radio]:checked ~ .check::before {
        background: #89CCF6;
    }

    input[type=radio]:checked ~ label {
        color: #000000;
    }
`

export const Check = styled.div`
    display: block;
    position: absolute;
    top: 1px;
    border: 2px solid #AAAAAA;
    border-radius: 100%;
    height: 18px;
    width: 18px;
    transition: all .25s ease-in-out;
    &:before {
        display: block;
        position: absolute;
        content: '';
        border-radius: 100%;
        height: 10px;
        width: 10px;
        top: 2px;
        left: 2px;
        margin: auto;
        transition: all .25s ease-in-out;
    }
`
