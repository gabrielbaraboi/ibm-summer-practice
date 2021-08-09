import styled from "styled-components";

export const Body = styled.div`
    padding-top: 100px;
    justify-content: center;
	align-items: center;
	flex-direction: column;
    background: #1d1b31;
    text-align: center;
	height: 100vh;
`

export const SettingsForm = styled.form`
    height: 100%;
    text-align: center;
`

export const Div = styled.div`
    overflow: hidden;
    margin-bottom: 0px;
`;

export const Card = styled.div`
    background : #29283a;
    position: relative;
    overflow: hidden;
    width: 300px;
    padding: 3rem 0 2rem;
    border-radius: 0.5rem;
    color: white;
    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
                0 9px 46px 8px rgba(0, 0, 0, 0.025),
                0 11px 15px -7px rgba(0, 0, 0, 0.025);
`;

export const Content = styled.div`
    position: relative;
    z-index: 3;
    text-align: left;
    padding-left: 25px;
    padding-bottom: 20px;
`;


export const Icon = styled.div`
    background : #29283a;
    margin-left: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    flex: 0 0 auto;
    margin-bottom: 30px;
    border-radius: 50%;
    font-size: 40px;
    color: white;
    box-shadow:  0 11px 15px -7px rgba(0, 0, 0, 0.25);
`;

export const InputType = styled.div`
    font-size: 1.1rem;
    display: inline; 
`;

export const Button = styled.button`
    float: right;
    margin-right: 20px;
    background: #6C7A89;
    border: 0;
    padding: 0 1rem;
    color: white;
    border-radius: 5px;
    &:hover {background: white;
            color: #29283a;
            }
`
export const DeleteButton = styled.button`
    margin-left: 80px;
    background: #6C7A89;
    border: 0;
    padding: 0 1rem;
    color: white;
    border-radius: 5px;
    &:hover {background: white;
            color: #29283a;
            }
`
export const Text = styled.div`
    color: gray;
    padding-top: 20px;
`

export const ActionButton = styled.button`
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
`;

export const Box = styled.div`
    padding: 10px;
    margin: 2px;
    display: inline-block;
    text-align: center;
`

export const Title = styled.div`
    color : white;
    font-size: 1.75rem;
`

export const IconContext = styled.div`
    color : white;
    margin-left: 350px;
    
`

export const View = styled.div`
    color: white;
    padding-right: 150px;
`

export const CardView = styled.div`
    color: white;
    background : #29283a;
    width: 500px;
    align-items: left;
    border-radius: 0.5rem;
    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
                0 9px 46px 8px rgba(0, 0, 0, 0.025),
                0 11px 15px -7px rgba(0, 0, 0, 0.025);
`

export const Name = styled.div`
    margin-left: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center ;
    align-items: center;
`

export const ProfilePicture = styled.div`
    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-top: 30px;
    }
`