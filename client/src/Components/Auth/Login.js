import React, { useState } from 'react';
import { Body,Container,LoginForm,Input,H1,A, InputContainer, SignInput, LoginContainer,SignUpInput,Label,Div } from './Auth.styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEnvelopeOpen,faLock } from '@fortawesome/free-solid-svg-icons';

function Login( { Login, error } ) {
    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault(); // prevent page from re-rendering

        Login(details);
    }

    return (
        <Body>
            <Container>
                <LoginForm onSubmit={submitHandler}>
                    <H1>Login</H1>
                    <InputContainer>
                        <Label><FontAwesomeIcon icon={faEnvelope} className="icon" fixedWidth /></Label>
                        <Div><Input type="text" name="email" id="email" placeholder="Email"/></Div>
                    </InputContainer>
                    <InputContainer>
                        <Label><FontAwesomeIcon icon={ faLock } className="icon" fixedWidth /></Label>
                        <Div><Input type="password" name="password" id="password" placeholder="Password"/></Div>
                    </InputContainer>
                    <A href="#">Forgot your password?</A>
                    <SignInput type="submit" value="LOGIN" />
                    {/* Display errors */}
                </LoginForm>
                <LoginContainer>
                    <H1> Welcome </H1>
                    <A>Dont Have an Account?</A>
                    <SignUpInput type="submit" value="Sign Up" />
                </LoginContainer>
            </Container>
        </Body>
    )
}

export default Login
