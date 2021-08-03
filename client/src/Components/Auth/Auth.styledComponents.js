import styled from "styled-components";

export const Body = styled.div`
    text-align: center;
    background: #1b1830;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	// margin: -20px 0 50px;
    box-sizing: border-box;

`
export const Container = styled.div`
    background-color: #fff;
	border-radius: 10px;
  	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
	width: 768px;
	max-width: 100%;
	min-height: 480px;
    display: flex;
`

export const InputContainer = styled.div`
    width: 300px;
    border: 1px;
    background-color: white;
    margin-bottom: 0.25rem;
    padding: 0;
`

export const DropdownContainer = styled.div`
    width: 300px;
    border: 1px;
    height: 9%;
    background-color: white;
    margin-bottom: 0.25rem;
    padding: 0;
`

export const LoginContainer = styled.div`
	color: white;
    width:100%;
    background-color: #7cb5e4;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
    a{
        color: white;
    }
    p{
        color: white;
        font-size: 13.5px;
        text-decoration: none;
        margin: 15px;
    }
`

export const RegisterContainer = styled.div`
    width:100%;
    background-color: #E4E9F7;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
    a{
        color: white;
    }
    p{
        font-size: 13.5px;
        text-decoration: none;
        margin: 15px;
    }
`

export const Label = styled.label`
    float: left;
    border: 0;
    font-size: 18px;
    margin-top: 5px;
    padding: 1vh 1vh;
`

export const LabelReg = styled.label`
    color: #7cb5e4;
    float: left;
    border: 0;
    font-size: 18px;
    margin-top: 5px;
    padding: 1vh 1vh;
`

export const Div = styled.div`
    overflow: hidden;
    margin-bottom: 0px;
`

export const LoginForm = styled.form`
    background-color: #E4E9F7;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
    width: 50%;
`

export const RegisterForm = styled.form`
    background-color: #7cb5e4;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
    width: 50%;
`

export const Input = styled.input`
    background-color: #FFFFFF;
    border: none;
    padding: 6px 7px;
    margin: 8px 0;
    width: 100%;
    &:focus {
        outline: none;
    }
`

export const H1 = styled.h1`
    font-weight: bold;
    margin: 0;
    margin-bottom: 10px;
`

export const H1Reg = styled.h1`
    color: white;
    font-weight: bold;
    margin: 0;
    margin-bottom: 10px;
`

export const Dropdown = styled.select`
    width: 100%;
    height: 100%;
    outline:none;
    color: #333;
	font-size: 14px;
`

export const A = styled.a`
	color: #333;
	font-size: 14px;
	text-decoration: none;
    margin: 15px;
`

export const SignUpA = styled.a`
    color: white;
    border-radius: 20px;
	border: 1px solid white;
	background-color: transparent;
	font-size: 1.8vh;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
    cursor: pointer;
    &:active{
        transform: scale(0.95);
    }
    &:focus{
        outline: none;
    }
`

export const SignInA = styled.a`
    border-radius: 20px;
	border: 1px solid #1d1b31;
	background-color: #1d1b31;
	color: #FFFFFF;
	font-size: 1.8vh;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
    cursor: pointer;
    &:active {
        transform: scale(0.95);
    }
    &:focus {
        outline: none;
    }
`

export const SignInput = styled.input`
    border-radius: 20px;
	border: 1px solid #1d1b31;
	background-color: #1d1b31;
	color: #FFFFFF;
	font-size: 1.8vh;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
    cursor: pointer;
    &:active {
        transform: scale(0.95);
    }
    &:focus {
        outline: none;
    }
`

export const SignUpInput = styled.input`
    border-radius: 20px;
	border: 1px solid white;
	background-color: transparent;
	color: white;
	font-size: 1.8vh;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
    margin-top: 0.25rem;
	transition: transform 80ms ease-in;
    cursor: pointer;
    &:active{
        transform: scale(0.95);
    }
    &:focus{
        outline: none;
    }
`

