import styled from "styled-components";

export const Body = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
    box-sizing: border-box;

`
export const Container = styled.div`
    background-color: white;
	border-radius: 10px;
  	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
	width: 950px;
	max-width: 100%;
	min-height: 500px;
    display: flex;
    margin-bottom:50px;
`

export const InputContainer = styled.div`
    width: 300px;
    border: 1px;
    background-color: white;
    
    padding: 0;
    .input{
        width: 100%;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: block;
    }
`
export const InputDescription = styled.div`
	color: white;
    width:100%;
    /* background-color: ; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
    border: 1px;
    background-color: white;
    margin-bottom: 1rem;
    padding: 0;
`

export const Div = styled.div`
    overflow: hidden;
    margin-bottom: 5px;
`

export const Form = styled.form`
    background-color: #d7e4f7;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    width: 100%;
`

export const Input = styled.input`
    background-color: #FFFFFF;
    border: none;
    margin: 8px 0;
    width: 100%;
    &:focus {
        outline: none;
    }
`

export const H1 = styled.h1`
    padding-top:10px;
    font-weight: bold;
    text-align:center;
`

export const ButtonSubmit = styled.input`
    border-radius: 20px;
    width:200px;
	border: 1px solid #1d1b31;
	background-color: #1d1b31;
	color: #FFFFFF;
	font-size: 1.8vh;
	font-weight: bold;
    margin-left:320px;
    margin-bottom:10px;
    margin-top:10px;
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

export const Label = styled.div`
  color: #363636;
  display: block;
  font-size: 1rem;
  font-weight: 500;
  padding: 6px 0 3px 0;
`
export const Choose = styled.div`
    width: 300px;
`
