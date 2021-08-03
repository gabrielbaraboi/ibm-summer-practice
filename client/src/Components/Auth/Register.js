import React, { useState } from 'react'
import { Body, Container, RegisterForm, Input, H1Reg, H1, InputContainer, SignInA, RegisterContainer, SignUpInput, LabelReg, Div, Dropdown, DropdownContainer } from './Auth.styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
import RegisterValidationRules from "../../Services/Validation/RegisterValidationRules";
import { register } from '../../Services/auth.service';
import useForm from '../../customHooks/userForm';

const Register = ({ onSubmit, authError }) => {
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(sendData, RegisterValidationRules);

    if (values.role === undefined)
        values.role = 'Student'

    function sendData() {

        console.log(values.role);
        const data = {
            email: values.email,
            password: values.password,
            role: values.role,
        };


        if (values.role === 'Company') {
            data.companyName = values.companyName
        }
        if (values.role === 'Student') {
            data.firstName = values.firstName
            data.lastName = values.lastName
        }
        // console.log(data);
        onSubmit(data);
    };

    return (
        <Body>
            <Container>
                <RegisterForm onSubmit={handleSubmit}>
                    <H1Reg>Sign up</H1Reg>
                    <DropdownContainer>
                        <Dropdown required onChange={handleChange} name="role">
                            <option defaultValue={values.role === "Student"} value={'Student'}>Student</option>
                            <option defaultValue={values.role === "Company"} value={'Company'}>Company</option>
                        </Dropdown>
                    </DropdownContainer>
                    {values.role === 'Student' &&
                        <React.Fragment>
                            <InputContainer>
                                <LabelReg><FontAwesomeIcon icon={faUser} className="icon" fixedWidth /></LabelReg>
                                <Div>
                                    <Input autoComplete="off" placeholder="First Name" className={`input ${errors.firstName && 'is-danger'}`} type="text" name="firstName" onChange={handleChange} value={values.firstName || ''} />
                                    {errors.firstName && (
                                        <p className="help is-danger">{errors.firstName}</p>
                                    )}
                                </Div>
                            </InputContainer>
                            <InputContainer>
                                <LabelReg><FontAwesomeIcon icon={faUser} className="icon" fixedWidth /></LabelReg>
                                <Div>
                                    <Input autoComplete="off" placeholder="Last Name" className={`input ${errors.lastName && 'is-danger'}`} type="text" name="lastName" onChange={handleChange} value={values.lastName || ''} />
                                    {errors.lastName && (
                                        <p className="help is-danger">{errors.lastName}</p>
                                    )}
                                </Div>
                            </InputContainer>
                        </React.Fragment>
                    }
                    {values.role === 'Company' &&
                        <InputContainer>
                            <LabelReg><FontAwesomeIcon icon={faUser} className="icon" fixedWidth /></LabelReg>
                            <Div>
                                <Input autoComplete="off" placeholder="Company Name" className={`input ${errors.companyName && 'is-danger'}`} type="text" name="companyName" onChange={handleChange} value={values.companyName || ''} />
                                {errors.companyName && (
                                    <p className="help is-danger">{errors.companyName}</p>
                                )}
                            </Div>
                        </InputContainer>
                    }
                    <InputContainer>
                        <LabelReg><FontAwesomeIcon icon={faEnvelope} className="icon" fixedWidth /></LabelReg>
                        <Div>
                            <Input autoComplete="off" placeholder="Email" className={`input ${errors.email && 'is-danger'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} />
                            {errors.email && (
                                <p className="help is-danger">{errors.email}</p>
                            )}
                        </Div>
                    </InputContainer>
                    <InputContainer>
                        <LabelReg><FontAwesomeIcon icon={faLock} className="icon" fixedWidth /></LabelReg>
                        <Div>
                            <Input autoComplete="off" placeholder="Password" className={`input ${errors.password && 'is-danger'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} />
                            {errors.password && (
                                <p className="help is-danger">{errors.password}</p>
                            )}
                        </Div>
                    </InputContainer>
                    <InputContainer>
                        <LabelReg><FontAwesomeIcon icon={faLock} className="icon" fixedWidth /></LabelReg>
                        <Div>
                            <Input autoComplete="off" placeholder="Confirm Password" className={`input ${errors.confirmPassword && 'is-danger'}`} type="password" name="confirmPassword" onChange={handleChange} value={values.confirmPassword || ''} />
                            {errors.confirmPassword && (
                                <p className="help is-danger">{errors.confirmPassword}</p>
                            )}
                        </Div>
                    </InputContainer>
                    <SignUpInput type="submit" value="Sign Up" />
                    <p className="help is-danger">{authError}</p>
                </RegisterForm>
                <RegisterContainer>
                    <H1> Welcome </H1>
                    <p>Already have an account?</p>
                    <SignInA href="/login">Sign in</SignInA>
                </RegisterContainer>
            </Container>
        </Body>
    )
}

export default () => {
    const [authError, setAuthError] = useState(false);
    const history = useHistory();

    const handleSubmit = async (data) => {

        register(data)
            .then(() => {
                history.push("/login");
            })
            .catch(err => {
                setAuthError(err.response.data.message)
            });

    };

    return <Register onSubmit={handleSubmit} authError={authError} />
}
