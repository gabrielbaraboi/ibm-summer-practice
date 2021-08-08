import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { ProfileCard, ProfileContainer, LinksCard, SpanLink, AboutContainer, Container, NameContainer, BackgroundPhoto, Group, EditBtn, ProfilePicture,ModalStyles,ModalForm, ModalClose } from './Profile.styledComponents';
import { faEdit,faCamera } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProfile,setProfilePic } from '../../Services/profile.service';
import { getCurrentUser,isUserData } from '../../Services/auth.service';
import ReactImageFallback from 'react-image-fallback';
import { ProfileModal } from './ProfileModal.component';
import Modal from 'react-modal';

const Profile = () => {
    const { id } = useParams();
    const [userExists, setUserExists] = useState(true);
    const [userData, setUserData] = useState();
    const [currentUser,setCurrentUser] = useState([]);
    const [showModalAbout, setShowModalAbout] = useState(false);
    const [showModalLink, setShowModalLink] = useState(false);
    const [showModalProfilePic, setShowModalProfilePic] = useState(false);
    const [file, setFile] = useState(null);


    const openModalAbout = () => {
        setShowModalAbout(prev => !prev);
    };

    const openModalLink = () => {
        setShowModalLink(prev => !prev);
    };

    const openModalProfilePic = (e) => {
        setShowModalLink(false);
        setShowModalAbout(false);
        setFile(null);
        setShowModalProfilePic(prev => !prev);
    };

    useEffect(() =>
        getProfile(id)
            .then(res => {
                setUserData(res.data.user);
            })
            .catch(err => {
                console.log(err.message);
                setUserExists(false)
            })
        , []
    );

    useEffect(() => {
        const userData = getCurrentUser();
        setCurrentUser(userData);
        console.log(userData);
    }, [])
    
    

    const handleSubmitProfilePic = () => {
        const formData = new FormData();
        formData.append('profile-picture', file);
        setProfilePic(formData);
    }
    
    
    return (
        <ProfileContainer>
            <Modal
                isOpen={showModalProfilePic}
                style={ModalStyles}
                onRequestClose={openModalProfilePic}>
                <ModalClose onClick={openModalProfilePic}>X</ModalClose>
                    
                <ModalForm onSubmit={handleSubmitProfilePic}>
                    <label htmlFor="profilePic">Select a Photo</label>
                    <input
                        filename={file}
                        onChange={e => setFile(e.target.files[0])}
                        type="file"
                        accept="image/*"
                        id="profilePic"
                        hidden
                    ></input>
                    {file ? (<img src={URL.createObjectURL(file)}/>) : null}
                    <button type="submit">Save</button>
                </ModalForm>
            </Modal>
            <ProfileCard>
                <BackgroundPhoto>
                    <ProfilePicture>
                        <ReactImageFallback
                            src={`/profile/${id}/getProfilePic`}
                            fallbackImage={process.env.PUBLIC_URL + '/iconUser.jpg'} />
                        {getCurrentUser() && currentUser.id === id ?
                            <button onClick={openModalProfilePic}>
                                <FontAwesomeIcon icon={faCamera} className="icon" fixedWidth/>
                            </button>
                        : null}
                    </ProfilePicture>
                </BackgroundPhoto>
                <NameContainer>
                    <span>{userData?.companyName}{userData?.firstName}{userData?.lastName}</span>
                    <span>{userData?.role}</span>
                </NameContainer>
            </ProfileCard>
            <Container>
                <LinksCard>
                    <Group>
                        <p>Social media</p>
                        {getCurrentUser() ?
                            <EditBtn onClick={openModalLink} type="button">
                                <FontAwesomeIcon icon={faEdit} className="icon" fixedWidth/>
                            </EditBtn>
                        : null}
                    </Group>
                    <ProfileModal showModal={showModalLink} setShowModal={setShowModalLink} type={"links"}/>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                            <span> website </span>
                            <SpanLink> {userData?.website} </SpanLink>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            <span> github </span>
                            <SpanLink> {userData?.github} </SpanLink>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                            <span> twitter </span>
                            <SpanLink> {userData?.twitter} </SpanLink>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                            <span> linkedin </span>
                            <SpanLink> {userData?.linkedin} </SpanLink>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            <span> facebook </span>
                            <SpanLink> {userData?.facebook} </SpanLink>
                        </li>
                    </ul>
                </LinksCard>
                <AboutContainer>
                    <Group>
                        <p>About</p>
                        {getCurrentUser() ?
                            <EditBtn onClick={openModalAbout} type="button">
                                <FontAwesomeIcon icon={faEdit} className="icon" fixedWidth></FontAwesomeIcon>
                            </EditBtn>
                        : null}
                    </Group>
                    <ProfileModal showModal={showModalAbout} setShowModal={setShowModalAbout} type={"about"}/>
                    <span>{userData?.about}</span>
                </AboutContainer>
            </Container>
        </ProfileContainer>
    )
}

export default Profile
