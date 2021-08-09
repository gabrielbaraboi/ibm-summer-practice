import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useForm from "../../customHooks/userForm";
import LoginValidationRules from "../../Services/Validation/LoginValidationRules";
import { login } from "../../Services/auth.service";
import { AuthContainer, 
    Container, 
    LoginForm, 
    Input, 
    TitleLog, 
    InputContainer, 
    SignInput, 
    LoginContainer, 
    IconLogin, 
    InputWrapper,
    SignUpA } from './Auth.styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

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
        <AuthContainer>
            <Container>
                <LoginForm onSubmit={handleSubmit}>
                    <TitleLog>Login</TitleLog>
                    <InputContainer>
                        <IconLogin>
                            <FontAwesomeIcon icon={faEnvelope} className="icon" fixedWidth />
                        </IconLogin>
                        <InputWrapper>
                            <Input 
                                autoComplete="off" 
                                className={`input ${errors.email && 'is-danger'}`} 
                                type="email" 
                                name="email" 
                                onChange={handleChange} 
                                placeholder="Email" 
                                value={values.email || ''}
                            />
                                {errors.email && (
                                    <p className="help is-danger">
                                        {errors.email}
                                    </p>
                                )}
                        </InputWrapper>
                    </InputContainer>
                    <InputContainer>
                        <IconLogin>
                            <FontAwesomeIcon icon={faLock} className="icon" fixedWidth />
                        </IconLogin>
                        <InputWrapper>
                            <Input 
                                className={`input ${errors.password && 'is-danger'}`} 
                                type="password" 
                                name="password" 
                                onChange={handleChange} 
                                placeholder="Password" 
                                value={values.password || ''} 
                            />
                            {errors.password && (
                                <p className="help is-danger">{errors.password}</p>
                            )}
                        </InputWrapper>
                    </InputContainer>
                    {/* <A href="#">Forgot your password?</A> */}
                    <SignInput type="submit" value="LOGIN" />
                    <p className="help is-danger">{authError}</p>
                </LoginForm>
                <LoginContainer>
                    <TitleLog> Welcome </TitleLog>
                    <p>Dont Have an Account?</p>
                    <SignUpA href="/register">Sign Up</SignUpA>
                </LoginContainer>
            </Container>
        </AuthContainer>
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