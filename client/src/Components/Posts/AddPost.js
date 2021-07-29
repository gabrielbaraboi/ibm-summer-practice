import React, { useState } from 'react';
import { Body, Container, Input, Form, H1, Choose, InputContainer, ButtonSubmit, Label, Div ,Flex } from "./AddPost.styledComponents"
import NavBar from '../NavBar/NavBar.component';
import { Main, Layout } from '../Global.styledComponents';

function AddPost() {
    const [values, setValues] = useState(
        {
            id: "12312312",
            createdBy: "idUser",
            dateCreated: "",
            type: "offer | request",
            description: "",
            title: "",
            programmingLanguage: "",
            workHours: "part-time | full-time",
            workPlace: "Timisoara | remote",
            requirements: [""],
        }
    );

    const submitHandler = e => {
        e.preventDefault();
        AddPost(values);
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const RadioGroup = () => {
        const [active, setActive] = React.useState();
        return (
            <div>
                <input type="radio" name="work-Hours" value=" Part-time" checked={active == 0} onClick={() => setActive(0)} />
                <label>Part-time</label>
                <div>{`\n`}</div>
                <input type="radio" name="work-Hours" value=" Full-time" checked={active == 1} onClick={() => setActive(1)} />
                <label>Full-time</label>
            </div>
        );
    }

    return (
        <>
            <Body>
                <Container>
                    <Form onSubmit={submitHandler}>
                        <H1>Create a new post</H1>
                        <Label>Title</Label>
                        <InputContainer>
                            <Div><Input type="text" name="title" id="title" placeholder="Title" value={values.title} onChange={handleChange} /></Div>
                        </InputContainer>
                        <Label>Programming language</Label>
                        <InputContainer>
                            <Div><Input type="text" name="programmingLanguage" id="programminglanguage" placeholder="Programming language" value={values.programmingLanguage} onChange={handleChange} /></Div>
                        </InputContainer>
                        <Label>Work Hours</Label>
                        <div>
                            <RadioGroup name="workHours" value={values.workHours} onChange={handleChange} />
                        </div>
                        <Label>Work Place</Label>
                        <Choose>
                            <select type="text" name="workPlace" value={values.workPlace} onChange={handleChange} >
                                <option>Choose Work Place</option>
                                <option value="Iași">Iași</option>
                                <option value="Cluj">Cluj</option>
                                <option value="Brașov">Brașov</option>
                                <option value="Timișoara">Timișoara</option>
                                <option value="București">București</option>
                                <option value="remote">Remote</option>
                            </select>
                        </Choose>
                        <Label>Description</Label>
                        <textarea name="description" placeholder="Description" rows="5" cols="100" value={values.description} onChange={handleChange} />
                        <Label>Requirements</Label>
                        <textarea name="requirements" placeholder="Requirements" rows="5" cols="100" value={values.requirements} onChange={handleChange} />
                        <Flex><ButtonSubmit type="submit" value="SUBMIT" /></Flex>
                    </Form>
                    
                </Container>
            </Body>
        </>
    )
}


export default AddPost
