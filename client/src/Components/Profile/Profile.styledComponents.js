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
    img{
        width: 150px;
        height: 150px;
        position: relative;
        margin-left: 2rem;
        top: 60%;
        border-radius: 30%;
        border: 3px solid white;
        &:hover{
            cursor:pointer;
        }
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
    &:hover{
        cursor:pointer;
    }
`

export const ChangePhoto = styled.label`
    background: #74718b;
    color: #F0FFFF;
    border: 0px solid #4CAF50;
    font-size: 15px;
    transition-duration: 0.4s;
    padding: 0px 10px;
    &:hover{
        cursor:pointer;
        background:#1d1b31;
    }

`

export const SpanLink = styled.span`
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
