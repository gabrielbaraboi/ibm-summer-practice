import styled from "styled-components";

export const ProfileContainer = styled.div`
    background:#1B1830;
    height:100%;
`;

export const Container = styled.div`
    display: flex;
`;

export const ProfileCard = styled.div`
    background: #29283a;
    padding: 0.4rem 0.4rem 5rem 0.4rem;
    margin-bottom: 0.25rem;
    width: 100%;
`;

export const ProfilePicture = styled.div`
    width: 120px;
    height: 120px;
    position: relative;
    display: inline-block;
    margin-left: 2rem;
    top: 4rem;
    z-index: 10;
    img{
        width: 120px;
        height: 120px;
        border-radius: 30%;
        border: 3px solid white;
    }
    button{
        position: absolute;
        bottom: -10px;
        font-size : 25px;
        right: -10px;
        padding: 5px 5px;
        background-color:rgba(96, 96, 245, 0.3);
        border-radius: 100%;
        color: #f5f8f5dc;
        border: none;
        &:hover{
            cursor:pointer;
            color: white;
            background-color:rgba(129, 129, 245, 0.3);
    }
`;

export const ModalStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        minWidth: "300px",
        minHeight: "300px",
        background: "#1d1b31",
    },
};

export const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    label {
        color: white;
        position: relative;
        text-align: center;
        border: 0px solid #4caf50;
        font-size: 20px;
        transition-duration: 0.4s;
        padding: 0px 10px;
        margin-bottom: 10px;
        &:hover {
            cursor: pointer;
            color: #74718b;
        }
    }
    img {
        top: 80px;
        position: absolute;
        width: 150px;
        height: 150px;
        border-radius: 30%;
        border: 3px solid white;
    }
    button {
        top: 160px;
        position: relative;
        padding: 5px;
        width: 80%;
        background-color: #7a77bb;
        color: white;
        transition-duration: 0.4s;
        border: none;
        border-radius: 0%;
        &:hover {
            background-color: rgba(129, 129, 245, 0.3);
            cursor: pointer;
        }
    }
`;

export const ModalClose = styled.button`
    position: relative;
    float: right;
    background: transparent;
    color: white;
    border: 0px solid #4caf50;
    font-size: 20px;
    transition-duration: 0.4s;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;

export const NameContainer = styled.div`
    border-right: 1px solid white;
    justify-content: center;
    position:relative;
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    padding: 0.25rem 1rem;
    text-align:right;
    width: 50%;
    span {
        color: whitesmoke;
        font-size: 25px;
    }
`;

export const BackgroundPhoto = styled.div`
    background-image: linear-gradient(360deg, #e58c8a, #eec0c6);
    width: 100%;
    margin-bottom:0.5rem;
`;

export const SpanLink = styled.a`
    color: white;
`;

export const LinksCard = styled.div`
    background: #29283a;
    display: flex;
    flex-direction: column;
    margin-right: 5px;
    position: relative;
    width:50%;
    padding: 0.25rem 1rem 0.25 0.25rem;
    ul {
        list-style-type: none;
        overflow: hidden;
    }
    a{
        color:white;
    }
    span {
        font-size: 15px;
        color: white;
    }
    p {
        color: white;
    }
`;

export const Group = styled.div`
    width:100%;
    p {
        margin-top:0.25rem;
        float: left;
    }
`;

export const EditBtn = styled.button`
    float: right;
    background: transparent;
    color: #f0ffff;
    border: 0px solid #4caf50;
    font-size: 20px;
    transition-duration: 0.4s;
    padding: 0px 10px;
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;

export const UserPostsContainer = styled.div`
    background: #29283a;
    display: block;
    width: 100%;
    span {
        color: white;
    }
`;

export const Title = styled.p`
    padding:0.5rem 0.5rem;
    margin-bottom: 15px;
    float:left;
    top: 15px;
    color: white;
`

export const AboutContainer = styled.div`
    width:100%;
    height: 100%;
    color:white;
    display: flex;
    flex-direction: column;
    position: relative;
    height:100%;
    p{
        padding:0.25rem;
        font-size: 1rem;
        font-weight:bold;
        float:left;
        text-aling: left;
    }
    span{
        padding:0.25rem;
    }
`

export const ProfilePostContainer = styled.div`
    color: white;
    padding: 0.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;
    overflow-y: scroll;
	@media (max-width: 768px) {
		width: 100%;
	}
`

export const ProfilePost = styled.div`
    display:flex;
    flex-direction:column;
    background: #1d1b31;
    border-radius: 0.5rem;
    padding:1rem;
    margin-bottom: 0.25rem;
    width: 100%;
	@media (max-width: 1000px) {
		padding: 0 1rem;
	}
`

export const ProfilePostTitle = styled.div`
    font-size: 1rem;
	a {
        transition: 0.5s;
		color: white;
        &:hover {
            cursor: pointer;
            opacity: 0.5;
        }
	}
	@media (max-width: 768px) {
		font-size: 1rem;
	}
`

export const ProfilePostInformation = styled.div`
    font-size: 1rem;
	width: 100%;
	a {
		color: white;
	}
	@media (max-width: 768px) {
		font-size: 1rem;
	}   
`
