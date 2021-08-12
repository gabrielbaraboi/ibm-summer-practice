import styled, { css } from "styled-components";

export const PostDiv = styled.div`
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const PostDivSinglePost = styled.div`
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
	margin: 0 auto;
    @media (max-width: 1366px) {
        width: 100%;
    }
`;

export const Posts = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    margin: auto;
    transition: width 0.3s ease-in-out;

    @media (max-width: 1366px) {
        width: 100%;
    }
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;

export const ClearBtn = styled.button`
	background-color: #6c7a89;
	color: white;
	transition-duration: 0.4s;
	border: none;
	border-radius: 0.5rem;
	padding: 8px;
	&:hover {
		background-color: white;
		color: black;
		cursor: pointer;
	}
	@media (max-width: 768px) {
		width: 33%;
	}
	@media (max-width: 600px) {
		width: 100%;
	}
`;

const gradient = (degs) => css`
    background: linear-gradient(${degs || 130}deg, black 0%, #7cb5e4 100%);
`;

export const CardDivider = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 3rem;
    @media (max-width: 400px) {
        width: 100%;
        margin: 0.2rem;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`;

export const Card = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    min-height: 180px;
    padding: 1rem 0;
    border-radius: 0.5rem;
    color: white;
    margin-bottom: 1.5rem;
    background: #29283a;
    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
        0 9px 46px 8px rgba(0, 0, 0, 0.025),
        0 11px 15px -7px rgba(0, 0, 0, 0.025);

    @media (max-width: 400px) {
        padding-bottom: 0;
    }
`;

export const Content = styled.div`
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: row;
    @media (max-width: 400px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Div = styled.div`
    margin-right: 1rem;
    width: fit-content;
    /* @media (max-width: 768px) {
        width: 20%;
    } */
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
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
    img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }
`;

export const PostTitle = styled.div`
    font-size: 1.75rem;
    align-self: start;
    width: 50%;
    ${"" /* max-width: 60%; */}
    a {
        color: white;
    }
    @media (max-width: 768px) {
        font-size: 1rem;
    }
    @media (max-width: 400px) {
        align-self: center;
        text-align: center;
        width: 100%;
        font-size: 1.2rem;
    }
`;

export const PostItems = styled.div`
    font-size: 0.75rem;
    @media (max-width: 400px) {
        width: 100%;
        font-size: 0.6rem;
    }
`;

export const Data = styled.div`
    font-size: 0.6rem;
    text-align: right;
    margin-right: 0.8rem;
    margin-top: 5px;
    &:nth-child(1) {
        margin-top: 0;
        font-size: 14px;
    }
    a {
        color: black;
        transition: all 0.2s ease-in-out;
        @media (max-width: 400px) {
            text-align: center;
            font-size: 0.8rem;
        }
    }
    a:hover {
        color: #6672b4;
        text-decoration: underline;
    }
    @media (max-width: 768px) {
        font-size: 0.6rem;
    }
    @media (max-width: 400px) {
        text-align: center;
        font-size: 0.7rem;
    }
`;

export const Group = styled.div`
    width: 32%;
    margin-left: auto;
    a {
        color: #222133;
        font-size: 13px;
        margin-left: 4px;
        @media (max-width: 768px) {
            font-size: 0.6rem;
        }
        @media (max-width: 400px) {
            text-align: center;
            font-size: 0.8rem;
        }
    }
    @media (max-width: 768px) {
        width: 50%;
    }
    @media (max-width: 400px) {
        width: 100%;
        align-self: center;
        text-align: center;
    }
`;

export const FeatureListItem = styled.div`
    margin-bottom: 0.325rem;
    padding-left: 10px;
    display: inline-block;
    margin-right: 10px;
    border-left: 1px solid #ffffff50;
	&:nth-child(1) {
		border-left: none;
	}
`;

export const PostDescription = styled.div`
    font-size: 1.2rem;
    @media (max-width: 400px) {
        width: 100%;
        font-size: 0.8rem;
    }
`;

export const PostRequirements = styled.div`
    font-size: 0.75rem;
    @media (max-width: 400px) {
        width: 100%;
        font-size: 0.6rem;
    }
`;

export const Author = styled.div`
    font-size: 0.75rem;
    margin-right: 0.8rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
	a{
		color:#a5a4a4;
	}
    @media (max-width: 768px) {
        font-size: 0.6rem;
    }
    @media (max-width: 400px) {
        justify-content: center;
        align-items: center;
        margin: 0;
        font-size: 0.8rem;
    }
`;

export const ActionButton = styled.button`
    flex: 0 0 auto;
    margin-right: 20px;
    height: 2.8rem;
    padding: 0 2rem;
    float: right;
    border: 0;
    border-radius: 20px;
    color: white;
    background: #6c7a89;
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
    transition: 0.5s;

    &:hover {
        background-color: white;
		color: black;
		cursor: pointer;
    }
    @media (max-width: 400px) {
        float: none;
        width: 100%;
        margin: 0;
        border-radius: 0 0 0.5rem 0.5rem;
    }
`;
export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: fit-content;
    background: #29283a;
    padding: 0.6rem;
    margin-top: 0.5rem;
    margin-left: 10px;
    border-radius: 0.5rem;
    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
        0 9px 46px 8px rgba(0, 0, 0, 0.025),
        0 11px 15px -7px rgba(0, 0, 0, 0.025);
    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
`;
export const Filter = styled.div`
    padding: 0 1rem;
    width: 100%;

    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        flex-direction: row;
        height: 100%;
        margin: 0;
        padding: 0.5rem;
    }
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const FilterTitle = styled.h2`
    color: white;
    font-size: 24px;
    font-weight: 500;
    overflow: hidden;
    padding: 0.5rem;
    @media (max-width: 768px) {
        padding: 0.5rem 1rem;
    }
`;

export const FilterCategory = styled.div`
    margin-left: 10px;
    label {
        margin-left: 5px;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const FilterCategoryTitle = styled.h3`
    color: white;
    font-size: 18px;
    font-weight: 500;
    margin-top: 15px;
    margin-bottom: 8px;
    margin-left: -10px;
`;

export const FilterField = styled.div`
	color: #686d88;
	display: block;
	position: relative;
	margin-top: 5px;
	height: 18px;
	&:hover label {
		color: white;
		cursor: pointer;
	}
	&:hover .check {
		border: 2px solid #89ccf6;
	}
	input[type="radio"] {
		position: absolute;
		visibility: hidden;
	}
	label {
		display: block;
		position: relative;
		cursor: pointer;
		margin-left: 25px;
		font-weight: 500;
		transition: all 0.25s ease-in-out;
	}
	input[type="radio"]:checked ~ .check {
		border: 2px solid #89ccf6;
	}

	input[type="radio"]:checked ~ .check::before {
		background: #89ccf6;
	}

	input[type="radio"]:checked ~ label {
		color: #000000;
	}
`;

export const Check = styled.div`
    display: block;
    position: absolute;
    top: 1px;
    border: 2px solid #aaaaaa;
    border-radius: 100%;
    height: 18px;
    width: 18px;
    transition: all 0.25s ease-in-out;
    &:before {
        display: block;
        position: absolute;
        content: "";
        border-radius: 100%;
        height: 10px;
        width: 10px;
        top: 2px;
        left: 2px;
        margin: auto;
        transition: all 0.25s ease-in-out;
    }
`;
