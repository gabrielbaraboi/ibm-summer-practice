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
    img{
        width: 150px;
        height: 150px;
        position: relative;
        margin-left: 2rem;
        top: 18vh;
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
    margin-top: 20px;
    margin-left: 28vh;
    width: 24%;
    span{
        color: whitesmoke;
        font-size: 25px;
    }
`

export const Background = styled.div`
    background-image: url(https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683__340.png);
    height:60%;
    width:100%;
    &:hover{
        cursor:pointer;
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
    justify-content: center;
    padding: 15px 10px 30px 10px;
    margin-right:5px;
    width:50%;
    ul{
        list-style-type: none;
    }
    li{
        margin-bottom:5px;
        color:white;
        
    }
    span{
        font-size: 15px;
        color:white;
    }
    p{
        color:white;
    }
`

export const Group = styled.div`
    margin-bottom: 1vh;
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
    &:hover{
        cursor:pointer;
        color: black;
    }
`


export const AboutContainer = styled.div`
    background-image: linear-gradient(360deg,#74718b,#1d1b31);
    display:flex;
    padding: 15px 10px 30px 10px;
    flex-direction: column;
    text-align: center;
    width: 50%;
    p{
        color:white;
    }
`
