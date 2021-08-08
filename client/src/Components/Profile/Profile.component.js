import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
    ProfileCard,
    ProfileContainer,
    LinksCard,
    SpanLink,
    AboutContainer,
    Container,
    NameContainer,
    BackgroundPhoto,
    Group,
    EditBtn,
    ProfilePicture,
    ModalStyles,
    ModalForm,
    ModalClose,
} from "./Profile.styledComponents";
import { faEdit, faCamera, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faTwitter,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProfile, setProfilePic } from "../../Services/profile.service";
import { getCurrentUser, isUserData } from "../../Services/auth.service";
import ReactImageFallback from "react-image-fallback";
import { ProfileModal } from "./ProfileModal.component";
import Modal from "react-modal";

const Profile = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState();
    const [currentUser, setCurrentUser] = useState([]);
    const [showModalProfilePic, setShowModalProfilePic] = useState(false);
    const [file, setFile] = useState(null);

    const [editSocialLinks, setEditSocialLinks] = useState(false);
    const toggleEditSocialLinks = () => {
        setEditSocialLinks(false);
    };

    const [editAbout, setEditAbout] = useState(false);
    const toggleEditAbout = () => {
        setEditAbout(false);
    };

    useEffect(
        () =>
            getProfile(id)
                .then((res) => {
                    setUserData(res.data.user);
                })
                .catch((err) => {
                    console.log(err.message);
                }),
        []
    );

    const openModalProfilePic = (e) => {
        setFile(null);
        setShowModalProfilePic((prev) => !prev);
    };

    useEffect(() => {
        const currentUserData = getCurrentUser();
        setCurrentUser(currentUserData);
    }, []);

    const handleSubmitProfilePic = () => {
        const formData = new FormData();
        formData.append("profile-picture", file);
        setProfilePic(formData);
    };

    return (
        <ProfileContainer>
            <Modal
                isOpen={showModalProfilePic}
                style={ModalStyles}
                onRequestClose={openModalProfilePic}
            >
                <ModalClose onClick={openModalProfilePic}>X</ModalClose>

                <ModalForm onSubmit={handleSubmitProfilePic}>
                    <label htmlFor="profilePic">Select a Photo</label>
                    <input
                        filename={file}
                        onChange={(e) => setFile(e.target.files[0])}
                        type="file"
                        accept="image/*"
                        id="profilePic"
                        hidden
                    ></input>
                    {file ? <img src={URL.createObjectURL(file)} /> : null}
                    <button type="submit">Save</button>
                </ModalForm>
            </Modal>
            <ProfileCard>
                <BackgroundPhoto>
                    <ProfilePicture>
                        <ReactImageFallback
                            src={`/profile/${id}/getProfilePic`}
                            fallbackImage={
                                process.env.PUBLIC_URL + "/iconUser.jpg"
                            }
                        />
                        {getCurrentUser() && currentUser.id === id ? (
                            <button onClick={openModalProfilePic}>
                                <FontAwesomeIcon
                                    icon={faCamera}
                                    className="icon"
                                    fixedWidth
                                />
                            </button>
                        ) : null}
                    </ProfilePicture>
                </BackgroundPhoto>
                <NameContainer>
                    <span>
                        {userData?.companyName}
                        {userData?.firstName}
                        {userData?.lastName}
                    </span>
                    <span>{userData?.role}</span>
                </NameContainer>
            </ProfileCard>
            <Container>
                <LinksCard>
                    <Group>
                        <p>Social media</p>
                        {getCurrentUser() && currentUser.id === id ? (
                            !editSocialLinks ? (
                                <>
                                    <EditBtn
                                        onClick={() => setEditSocialLinks(true)}
                                    >
                                        <FontAwesomeIcon
                                            icon={faEdit}
                                            className="icon"
                                            fixedWidth
                                        />
                                    </EditBtn>
                                </>
                            ) : (
                                <ProfileModal
                                    type={"links"}
                                    userData={userData}
                                    toggleEditSocialLinks={
                                        toggleEditSocialLinks
                                    }
                                />
                            )
                        ) : (
                            ""
                        )}
                    </Group>
                    {getCurrentUser() && currentUser.id === id ? (
                        <ul>
                            <li>
                                <FontAwesomeIcon
                                    icon={faGlobe}
                                    className="icon"
                                    fixedWidth
                                ></FontAwesomeIcon>
                                <span> website </span>
                                <SpanLink> {userData?.website} </SpanLink>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="icon"
                                    fixedWidth
                                ></FontAwesomeIcon>
                                <span> github </span>
                                <SpanLink> {userData?.github} </SpanLink>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    className="icon"
                                    fixedWidth
                                ></FontAwesomeIcon>
                                <span> twitter </span>
                                <SpanLink> {userData?.twitter} </SpanLink>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="icon"
                                    fixedWidth
                                ></FontAwesomeIcon>
                                <span> linkedin </span>
                                <SpanLink> {userData?.linkedin} </SpanLink>
                            </li>
                            <li>
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    className="icon"
                                    fixedWidth
                                ></FontAwesomeIcon>
                                <span> facebook </span>
                                <SpanLink> {userData?.facebook} </SpanLink>
                            </li>
                        </ul>
                    ) : (
                        <ul>
                            {userData?.website && (
                                <li>
                                    <FontAwesomeIcon
                                        icon={faGlobe}
                                        className="icon"
                                        fixedWidth
                                    ></FontAwesomeIcon>
                                    <span> website </span>
                                    <SpanLink> {userData?.website} </SpanLink>
                                </li>
                            )}
                            {userData?.github && (
                                <li>
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="icon"
                                        fixedWidth
                                    ></FontAwesomeIcon>
                                    <span> github </span>
                                    <SpanLink> {userData?.github} </SpanLink>
                                </li>
                            )}
                            {userData?.twitter && (
                                <li>
                                    <FontAwesomeIcon
                                        icon={faTwitter}
                                        className="icon"
                                        fixedWidth
                                    ></FontAwesomeIcon>
                                    <span> twitter </span>
                                    <SpanLink> {userData?.twitter} </SpanLink>
                                </li>
                            )}
                            {userData?.linkedin && (
                                <li>
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        className="icon"
                                        fixedWidth
                                    ></FontAwesomeIcon>
                                    <span> linkedin </span>
                                    <SpanLink> {userData?.linkedin} </SpanLink>
                                </li>
                            )}
                            {userData?.facebook && (
                                <li>
                                    <FontAwesomeIcon
                                        icon={faFacebook}
                                        className="icon"
                                        fixedWidth
                                    ></FontAwesomeIcon>
                                    <span> facebook </span>
                                    <SpanLink> {userData?.facebook} </SpanLink>
                                </li>
                            )}
                        </ul>
                    )}
                </LinksCard>
                <AboutContainer>
                    <Group>
                        <p>About</p>
                        {getCurrentUser() && currentUser.id === id ? (
                            !editAbout ? (
                                <>
                                    <EditBtn
                                        onClick={() => setEditAbout(true)}
                                        type="button"
                                    >
                                        <FontAwesomeIcon
                                            icon={faEdit}
                                            className="icon"
                                            fixedWidth
                                        ></FontAwesomeIcon>
                                    </EditBtn>
                                </>
                            ) : (
                                <ProfileModal
                                    type={"about"}
                                    userData={userData}
                                    toggleEditAbout={toggleEditAbout}
                                />
                            )
                        ) : (
                            ""
                        )}
                        <span>{userData?.about}</span>
                    </Group>
                </AboutContainer>
            </Container>
        </ProfileContainer>
    );
};

export default Profile;
