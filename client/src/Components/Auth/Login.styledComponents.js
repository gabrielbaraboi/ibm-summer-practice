import styled from "styled-components";

export const Body = styled.div`
    text-align: center;
    background: #11101D;
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
    .input{
        width: 100%;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: block;
    }
`

export const SignUpContainer = styled.div`
	color: white;
    width:100%;
    background-color: #7cb5e4;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
`

export const Label = styled.label`
    float: left;
    border: 0;
    font-size: 18px;
    margin-top: 5px;
    padding: 1vh 1vh;
`

export const Div = styled.div`
    overflow: hidden;
    margin-bottom: 5px;
`

export const Form = styled.form`
    background-color: #E4E9F7;
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

export const A = styled.a`
	color: #333;
	font-size: 14px;
	text-decoration: none;
    margin: 15px;
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
    margin-top: 115px;
    border-radius: 20px;
	border: 1px solid white;
	background-color: transparent;
	color: white;
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

