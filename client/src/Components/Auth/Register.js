import React from 'react'
import { Body,Container,RegisterForm,Input,H1Reg,H1, InputContainer, SignInA, RegisterContainer,SignUpInput,LabelReg,Div,Dropdown,DropdownContainer } from './Auth.styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLock,faUser } from '@fortawesome/free-solid-svg-icons';


const Register = ({}) => {
    const [isStudent,setState] = React.useState(true);

    const handleClick = (e) => {
        if(e.target.value == "Student")
        {
            setState(true)
        }
        else
        {
            setState(false);
        }
    };

    return (
        <Body>
            <Container>
                <RegisterForm>
                    <H1Reg>Sign up</H1Reg>
                    {isStudent == true &&
                        <InputContainer>
                            <LabelReg><FontAwesomeIcon icon={ faUser } className="icon" fixedWidth /></LabelReg>
                            <Div><Input type="text" name="firstname" id="firstname" placeholder="First Name"/></Div>
                        </InputContainer>
                    }
                    {isStudent == true &&
                        <InputContainer>
                            <LabelReg><FontAwesomeIcon icon={ faUser } className="icon" fixedWidth /></LabelReg>
                            <Div><Input type="text" name="lastname" id="lastname" placeholder="Last Name"/></Div>
                        </InputContainer>
                    }
                    {isStudent == false &&
                        <InputContainer>
                            <LabelReg><FontAwesomeIcon icon={ faUser } className="icon" fixedWidth /></LabelReg>
                            <Div><Input type="text" name="lastname" id="lastname" placeholder="Company name"/></Div>
                        </InputContainer>
                    }
                    <InputContainer>
                        <LabelReg><FontAwesomeIcon icon={ faEnvelope } className="icon" fixedWidth /></LabelReg>
                        <Div><Input type="text" name="email" id="email" placeholder="Email"/></Div>
                    </InputContainer>
                    <InputContainer>
                        <LabelReg><FontAwesomeIcon icon={ faLock } className="icon" fixedWidth /></LabelReg>
                        <Div><Input type="password" name="password" id="password" placeholder="Password"/></Div>
                    </InputContainer>
                    <DropdownContainer>
                        <Dropdown required onChange={handleClick}>
                            <option value="" disabled selected hidden>Select your role</option>
                            <option value="Student">Student</option>
                            <option value="Company">Company</option>
                        </Dropdown>
                    </DropdownContainer>
                    <SignUpInput type="submit" value="Sign Up" />
                    {/* Display errors */}
                </RegisterForm>
                <RegisterContainer>
                    <H1> Welcome </H1>
                    <p>Already have an account?</p>
                    <SignInA href="/Login">Sign in</SignInA>
                </RegisterContainer>
            </Container>
        </Body>
    )
}

export default Register
