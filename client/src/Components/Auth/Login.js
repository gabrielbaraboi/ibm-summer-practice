import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useForm from "../../customHooks/userForm";
import LoginValidationRules from "../../Services/Validation/LoginValidationRules";
import { login } from "../../Services/auth.service";
import { Body, Container, LoginForm, Input, H1, A, InputContainer, SignInput, LoginContainer, SignUpInput, Label, Div } from './Auth.styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEnvelopeOpen, faLock } from '@fortawesome/free-solid-svg-icons';

const Login = ({ onSubmit, authError }) => {
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(sendData, LoginValidationRules);

    function sendData() {
        const data = {
            email: values.email,
            password: values.password
        }
        onSubmit(data);
    };

    return (
        <Body>
            <Container>
                <LoginForm onSubmit={handleSubmit}>
                    <H1>Login</H1>
                    <InputContainer>
                        <Label><FontAwesomeIcon icon={faEnvelope} className="icon" fixedWidth /></Label>
                        <Div><Input autoComplete="off" className={`input ${errors.email && 'is-danger'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} />
                            {errors.email && (
                                <p className="help is-danger">{errors.email}</p>
                            )}</Div>
                    </InputContainer>
                    <InputContainer>
                        <Label><FontAwesomeIcon icon={faLock} className="icon" fixedWidth /></Label>
                        <Div><Input className={`input ${errors.password && 'is-danger'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} />
                            {errors.password && (
                                <p className="help is-danger">{errors.password}</p>
                            )}</Div>
                    </InputContainer>
                    <A href="#">Forgot your password?</A>
                    <SignInput type="submit" value="LOGIN" />
                    <p className="help is-danger">{authError}</p>
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

export default () => {
    const [authError, setAuthError] = useState('');
    const history = useHistory();

    const handleSubmit = data => {
        login(data)
            .then(() => {
                history.push("/");
                window.location.reload();
            })
            .catch(err => {
                setAuthError(err.response.data.message)
            });
    };

    return <Login onSubmit={handleSubmit} authError={authError} />
};