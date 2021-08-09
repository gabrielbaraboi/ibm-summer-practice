import React, { useState } from 'react'
import { AuthContainer, 
    Container, 
    RegisterForm, 
    Input,
    TitleReg, 
    TitleLog, 
    InputContainer, 
    SignInLink, 
    RegisterContainer, 
    SignUpInput,
    InputWrapper, 
    Dropdown,
    IconReg,
    DropdownContainer } from './Auth.styledComponents';
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

    const [file, setFile] = useState(null);

    if (values.role === undefined)
        values.role = 'Student'

    function sendData() {
        const formData = new FormData();
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
        formData.append('data', JSON.stringify(data));
        formData.append('profile-picture', file);
        onSubmit(formData);
    };

    return (
        <AuthContainer>
            <Container>
                <RegisterForm onSubmit={handleSubmit}>
                    <TitleReg>Sign up</TitleReg>
                    <DropdownContainer>
                        <Dropdown required onChange={handleChange} name="role">
                            <option defaultValue={values.role === "Student"} value={'Student'}>Student</option>
                            <option defaultValue={values.role === "Company"} value={'Company'}>Company</option>
                        </Dropdown>
                    </DropdownContainer>
                    {values.role === 'Student' &&
                        <React.Fragment>
                            <InputContainer>
                                <IconReg>
                                    <FontAwesomeIcon icon={faUser} className="icon" fixedWidth />
                                </IconReg>
                                <InputWrapper>
                                    <Input 
                                        autoComplete="off" 
                                        placeholder="First Name" 
                                        className={`input ${errors.firstName && 'is-danger'}`} 
                                        type="text" 
                                        name="firstName" 
                                        onChange={handleChange} 
                                        value={values.firstName || ''} 
                                    />
                                    {errors.firstName && (
                                        <p className="help is-danger">{errors.firstName}</p>
                                    )}
                                </InputWrapper>
                            </InputContainer>
                            <InputContainer>
                                <IconReg>
                                    <FontAwesomeIcon icon={faUser} className="icon" fixedWidth />
                                </IconReg>
                                <InputWrapper>
                                    <Input 
                                        autoComplete="off" 
                                        placeholder="Last Name" 
                                        className={`input ${errors.lastName && 'is-danger'}`} 
                                        type="text" 
                                        name="lastName" 
                                        onChange={handleChange} 
                                        value={values.lastName || ''} />
                                    {errors.lastName && (
                                        <p className="help is-danger">{errors.lastName}</p>
                                    )}
                                </InputWrapper>
                            </InputContainer>
                        </React.Fragment>
                    }
                    {values.role === 'Company' &&
                        <InputContainer>
                            <IconReg>
                                <FontAwesomeIcon icon={faUser} className="icon" fixedWidth />
                            </IconReg>
                            <InputWrapper>
                                <Input 
                                autoComplete="off" 
                                placeholder="Company Name" 
                                className={`input ${errors.companyName && 'is-danger'}`}
                                type="text" 
                                name="companyName" 
                                onChange={handleChange} 
                                value={values.companyName || ''} />
                                {errors.companyName && (
                                    <p className="help is-danger">{errors.companyName}</p>
                                )}
                            </InputWrapper>
                        </InputContainer>
                    }
                    <InputContainer>
                        <IconReg>
                            <FontAwesomeIcon icon={faEnvelope} className="icon" fixedWidth />
                        </IconReg>
                        <InputWrapper>
                            <Input 
                                autoComplete="off" 
                                placeholder="Email" 
                                className={`input ${errors.email && 'is-danger'}`} 
                                type="email" 
                                name="email" 
                                onChange={handleChange} 
                                value={values.email || ''} 
                            />
                            {errors.email && (
                                <p className="help is-danger">{errors.email}</p>
                            )}
                        </InputWrapper>
                    </InputContainer>
                    <InputContainer>
                        <IconReg>
                            <FontAwesomeIcon icon={faLock} className="icon" fixedWidth />
                        </IconReg>
                        <InputWrapper>
                            <Input autoComplete="off" placeholder="Password" className={`input ${errors.password && 'is-danger'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} />
                            {errors.password && (
                                <p className="help is-danger">{errors.password}</p>
                            )}
                        </InputWrapper>
                    </InputContainer>
                    <InputContainer>
                        <IconReg>
                            <FontAwesomeIcon icon={faLock} className="icon" fixedWidth />
                        </IconReg>
                        <InputWrapper>
                            <Input autoComplete="off" placeholder="Confirm Password" className={`input ${errors.confirmPassword && 'is-danger'}`} type="password" name="confirmPassword" onChange={handleChange} value={values.confirmPassword || ''} />
                            {errors.confirmPassword && (
                                <p className="help is-danger">{errors.confirmPassword}</p>
                            )}
                        </InputWrapper>
                    </InputContainer>
                    <InputContainer>
                        <InputWrapper>
                            <label htmlFor="profilePic">Select a Photo</label>
                            <input
                                filename={file}
                                onChange={e => setFile(e.target.files[0])}
                                type="file"
                                accept="image/*"
                                id="profilePic"
                                hidden
                            ></input>
                        </InputWrapper>
                    </InputContainer>
                    <SignUpInput type="submit" value="Sign Up" />
                    <p className="help is-danger">{authError}</p>
                </RegisterForm>
                <RegisterContainer>
                    <TitleLog> Welcome </TitleLog>
                    <p>Already have an account?</p>
                    <SignInLink href="/login">Sign in</SignInLink>
                </RegisterContainer>
            </Container>
        </AuthContainer>
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
