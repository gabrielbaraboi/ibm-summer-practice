import { faExternalLinkAlt, faFileExcel } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export const ProfileContainer = styled.div`
    padding: 20px 6vh;
`

export const Container = styled.div`
    display:flex;
`

export const ProfileCard = styled.div`
    background-image: linear-gradient(180deg,#74718b,#1d1b31);
    display:block;
    justify-content: center;
    padding: 10px 10px;
    margin-bottom: 5px;
    width: 100%;
    height: 24rem;
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
`

export const ProfilePicture = styled.div`
    width: 150px;
    height: 150px;
    position: relative;
    display: inline-block;
    margin-left: 2rem;
    top: 60%;
    img{
        width: 150px;
        height: 150px;
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
`

export const ModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        minWidth:'300px',
        minHeight:'300px',
        background: '#1d1b31'
    }
}

export const ModalForm = styled.form`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    padding:20px;
    label{
        color:white;
        position: relative;
        text-align:center;
        border: 0px solid #4CAF50;
        font-size: 20px;
        transition-duration: 0.4s;
        padding: 0px 10px;
        margin-bottom:10px;
        &:hover{
            cursor:pointer;
            color:#74718b;
        }
    }
    img{
        top:80px;
        position:absolute;
        width: 150px;
        height: 150px;
        border-radius: 30%;
        border: 3px solid white;
    }
    button{
        top:160px;
        position:relative;  
        padding: 5px;
        width:80%;
        background-color:#7a77bb;
        color:white;
        transition-duration: 0.4s;
        border:none;
        border-radius: 0%;
        &:hover{
            background-color: rgba(129, 129, 245, 0.3);
            cursor:pointer;
        }
    }
`

export const ModalClose = styled.button`
    position:relative;
    float:right;
    background: transparent;
    color: white;
    border: 0px solid #4CAF50;
    font-size: 20px;
    transition-duration: 0.4s;
    &:hover{
        cursor:pointer;
        opacity: 0.5;
    }
`

export const NameContainer = styled.div`
    justify-content: center;
    display:flex;
    flex-direction: column;
    margin-top: 10px;
    margin-left: 200px;
    span{
        color: whitesmoke;
        font-size: 25px;
    }
`

export const BackgroundPhoto = styled.div`
    background-image: url(https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__340.png);
    height:60%;
    width:100%;
`

export const SpanLink = styled.a`
    color:white;
    float:right;
`

export const LinksCard = styled.div`
    background-image: linear-gradient(360deg,#74718b,#1d1b31);
    display:flex;
    flex-direction: column;
    margin-right:5px;
    overflow: hidden;
    position:relative;
    width:50%;
    height:38vh;
    ul{
        height:75%;
        list-style-type: none;
        padding: 10px 15px 15px 15px;
    }
    li{ 
        color:white;
    }
    span{
        font-size: 15px;
        color:white;
    }
    p{
        padding: 0px 10px;
        top:15px;
        color:white;
    }
`

export const Group = styled.div`
    margin-top:10px;
    p{
        float:left;
    }
`

export const EditBtn = styled.button`
    float:right;
    background: transparent;
    color: #F0FFFF;
    border: 0px solid #4CAF50;
    font-size: 20px;
    transition-duration: 0.4s;
    padding: 0px 10px;
    &:hover{
        cursor:pointer;
        opacity: 0.5;
    }
`


export const AboutContainer = styled.div`
    background-image: linear-gradient(360deg,#74718b,#1d1b31);
    display:flex;
    flex-direction: column;
    text-align: center;
    overflow: hidden;
    position:relative;
    width: 50%;
    p{
        padding: 0px 20px;
        margin-bottom: 15px;
        top:15px;
        color:white;
    }
    span{
        color:white;
    }
`
