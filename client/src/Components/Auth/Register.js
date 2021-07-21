import React from 'react'
import { Body,Container,RegisterForm,Input,H1Reg,H1,A, InputContainer, SignInput, RegisterContainer,SignUpInput,LabelReg,Div,Dropdown,DropdownContainer,Option } from './Auth.styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLock,faUser } from '@fortawesome/free-solid-svg-icons';


function Register() {
    return (
        <Body>
            <Container>
                <RegisterForm>
                    <H1Reg>Sign up</H1Reg>
                    <InputContainer>
                        <LabelReg><FontAwesomeIcon icon={ faUser } className="icon" fixedWidth /></LabelReg>
                        <Div><Input type="text" name="firstname" id="firstname" placeholder="First Name"/></Div>
                    </InputContainer>
                    <InputContainer>
                        <LabelReg><FontAwesomeIcon icon={ faUser } className="icon" fixedWidth /></LabelReg>
                        <Div><Input type="text" name="lastname" id="lastname" placeholder="Last Name"/></Div>
                    </InputContainer>
                    <InputContainer>
                        <LabelReg><FontAwesomeIcon icon={ faEnvelope } className="icon" fixedWidth /></LabelReg>
                        <Div><Input type="text" name="email" id="email" placeholder="Email"/></Div>
                    </InputContainer>
                    <InputContainer>
                        <LabelReg><FontAwesomeIcon icon={ faLock } className="icon" fixedWidth /></LabelReg>
                        <Div><Input type="password" name="password" id="password" placeholder="Password"/></Div>
                    </InputContainer>
                    <DropdownContainer>
                        <Dropdown required>
                            <Option value="" disabled selected hidden>Select your role</Option>
                            <option value="Student">Student</option>
                            <option value="Company">Company</option>
                        </Dropdown>
                    </DropdownContainer>
                    <SignUpInput type="submit" value="Sign Up" />
                    {/* Display errors */}
                </RegisterForm>
                <RegisterContainer>
                    <H1> Welcome </H1>
                    <A>Already have an account?</A>
                    <SignInput type="submit" value="Sign in" />
                </RegisterContainer>
            </Container>
        </Body>
    )
}

export default Register
