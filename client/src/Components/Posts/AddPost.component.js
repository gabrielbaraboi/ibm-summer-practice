import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import useForm from '../../customHooks/userForm';
import AddPostValidationRules from '../../Services/Validation/AddPostValidationRules';
import { createPost } from '../../Services/post.service';
import { Body, Container, Input, Form, H1, Choose, InputContainer, ButtonSubmit, Label, Div, Flex, InputRequirements, InputRequirement } from "./AddPost.styledComponents"

const AddPost = ({ onSubmit, authError }) => {
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(sendData, AddPostValidationRules);

    const [reqs, setReqs] = useState([])
    let reqInput = React.useRef();

    const removeReq = (i) => {
        const newReqs = [...reqs];
        newReqs.splice(i, 1);
        setReqs(newReqs);
    };

    const inputKeyDown = () => {
        const val = reqInput.value;
        if (val.length > 0) {
            if (reqs.find(req => req.toLowerCase() === val.toLowerCase())) {
                return;
            }
            setReqs([...reqs, val]);
            reqInput.value = null;
        }
    }

    function sendData() {
        const data = {
            description: values.description,
            title: values.title,
            programmingLanguage: values.programmingLanguage,
            workHours: values.workHours,
            workPlace: values.workPlace,
            requirements: reqs
        }
        onSubmit(data);
    };

    return (
        <>
            <Body>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <H1>Create a new post</H1>
                        <Label>Title</Label>
                        <InputContainer>
                            <Div>
                                <Input autoComplete="off" className={`input ${errors.title && 'is-danger'}`} type="text" name="title" onChange={handleChange} value={values.title || ''} />
                                {errors.title && (
                                    <p className="help is-danger">{errors.title}</p>
                                )}
                            </Div>
                        </InputContainer>
                        <Label>Programming language</Label>
                        <InputContainer>
                            <Div>
                                <Input className={`input ${errors.programmingLanguage && 'is-danger'}`} type="text" name="programmingLanguage" onChange={handleChange} value={values.programmingLanguage || ''} />
                                {errors.programmingLanguage && (
                                    <p className="help is-danger">{errors.programmingLanguage}</p>
                                )}
                            </Div>
                        </InputContainer>
                        <Label>Work Hours</Label>
                        <Choose>
                            <select className={`input ${errors.workHours && 'is-danger'}`} type="text" name="workHours" onChange={handleChange} value={values.workHours || ''} >
                                <option>Choose Work Hours</option>
                                <option value="full-time">Full Time</option>
                                <option value="part-time">Part Time</option>
                            </select>
                        </Choose>
                        {errors.workHours && (
                            <p className="help is-danger">{errors.workHours}</p>
                        )}
                        <Label>Work Place</Label>
                        <Choose>
                            <select className={`input ${errors.workPlace && 'is-danger'}`} type="text" name="workPlace" onChange={handleChange} value={values.workPlace || ''} >
                                <option>Choose Work Place</option>
                                <option value="Iași">Iași</option>
                                <option value="Cluj">Cluj</option>
                                <option value="Brașov">Brașov</option>
                                <option value="Timișoara">Timișoara</option>
                                <option value="București">București</option>
                                <option value="remote">Remote</option>
                            </select>
                        </Choose>
                        {errors.workPlace && (
                            <p className="help is-danger">{errors.workPlace}</p>
                        )}
                        <Label>Description</Label>
                        <textarea className={`input ${errors.description && 'is-danger'}`} name="description" rows="5" onChange={handleChange} value={values.description || ''} />
                        {errors.description && (
                            <p className="help is-danger">{errors.description}</p>
                        )}
                        <Label>Requirements</Label>
                        <input className={`input`} type="text" name="req" ref={c => { reqInput = c; }} />
                        <button type="button" onClick={inputKeyDown} className="button is-info">Add Requirement</button>
                        <InputRequirements>
                            {reqs.map((tag, i) => (
                                <InputRequirement key={tag}>
                                    {tag}
                                    <button type="button" onClick={() => { removeReq(i); }}>+</button>
                                </InputRequirement>
                            ))}
                        </InputRequirements>
                        <Flex><ButtonSubmit type="submit" value="SUBMIT" /></Flex>
                        <p className="help is-danger">{authError}</p>
                    </Form>

                </Container>
            </Body>
        </>
    )
}


export default () => {
    const [authError, setAuthError] = useState('');
    const history = useHistory();

    const handleSubmit = data => {
        createPost(data)
            .then(() => {
                history.push("/");
            })
            .catch(err => {
                setAuthError(err.response.data.message)
            });
    };

    return <AddPost onSubmit={handleSubmit} authError={authError} />
};