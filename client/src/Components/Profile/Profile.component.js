import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
    ProfileCard,
    ProfileContainer,
    LinksCard,
    SpanLink,
    UserPostsContainer,
    Container,
    NameContainer,
    BackgroundPhoto,
    Group,
    EditBtn,
    ProfilePicture,
    ModalStyles,
    ModalForm,
    ModalClose,
    AboutContainer,
    Title,
    ProfilePostContainer,
    ProfilePost,
    ProfilePostTitle,
    ProfilePostInformation
} from "./Profile.styledComponents";
import { DeleteButton,EditButton } from "../Global.styledComponents";
import { faEdit, faCamera, faGlobe,faTrash } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faTwitter,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProfile, setProfilePic } from "../../Services/profile.service";
import { getCurrentUser, getAllUserPosts } from "../../Services/auth.service";
import ReactImageFallback from "react-image-fallback";
import { ProfileModal } from "./ProfileModal.component";
import moment from "moment";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { deletePost } from "../../Services/post.service";

const Profile = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState();
    const [currentUser, setCurrentUser] = useState([]);
    const [showModalProfilePic, setShowModalProfilePic] = useState(false);
    const [file, setFile] = useState(null);
    const [posts, setPosts] = useState([]);

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

    useEffect(() => {
		getAllUserPosts(
			id
		)
			.then((res) => {
				setPosts(res.data);
			})
			.catch((err) => {
				console.log(err);
				setPosts([]);
			});
	}, [posts]);

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
        window.location.reload();
    };

    return (
        <> 
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
                <Container>
                    <NameContainer>
                        <span>
                            {userData?.companyName}
                            {userData?.firstName}
                            {" "}
                            {userData?.lastName}
                        </span>
                        <span>{userData?.role}</span>
                    </NameContainer>
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
                        </Group>
                        <span>{userData?.about}</span>
                    </AboutContainer>
                </Container>
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
                                <a href={userData?.website}>
                                    <FontAwesomeIcon
                                        icon={faGlobe}
                                        className="icon"
                                        fixedWidth
                                    />
                                </a>
                                <span> website </span>
                            </li>
                            <li>
                                <a href={userData?.github}>
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="icon"
                                        fixedWidth
                                    />
                                </a>
                                <span> github </span>
                            </li>
                            <li>
                                <a href={userData?.twitter}>
                                    <FontAwesomeIcon
                                        icon={faTwitter}
                                        className="icon"
                                        fixedWidth
                                    />
                                </a>
                                <span> twitter </span>
                            </li>
                            <li>
                                <a href={userData?.linkedin}>
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        className="icon"
                                        fixedWidth
                                    />
                                </a>
                                <span> linkedin </span>
                            </li>
                            <li>
                                <a href={userData?.facebook}>
                                    <FontAwesomeIcon
                                        icon={faFacebook}
                                        className="icon"
                                        fixedWidth
                                    />
                                </a>
                                <span> facebook </span>
                            </li>
                        </ul>
                    ) : (
                        <ul>
                            {userData?.website && (
                                <li>
                                    <a href={userData?.website}>
                                        <FontAwesomeIcon
                                            icon={faGlobe}
                                            className="icon"
                                            fixedWidth
                                        />
                                    </a>
                                    <span> website </span>
                                </li>
                            )}
                            {userData?.github && (
                                <li>
                                    <a href={userData?.github}>
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            className="icon"
                                            fixedWidth
                                        />
                                    </a>
                                    <span> github </span>
                                </li>
                            )}
                            {userData?.twitter && (
                                <li>
                                    <a href={userData?.twitter}>
                                        <FontAwesomeIcon
                                            icon={faTwitter}
                                            className="icon"
                                            fixedWidth
                                        />
                                    </a>
                                    <span> twitter </span>
                                </li>
                            )}
                            {userData?.linkedin && (
                                <li>
                                    <a href={userData?.linkedin}>
                                        <FontAwesomeIcon
                                            icon={faLinkedin}
                                            className="icon"
                                            fixedWidth
                                        />
                                    </a>
                                    <span> linkedin </span>
                                    <SpanLink> {userData?.linkedin} </SpanLink>
                                </li>
                            )}
                            {userData?.facebook && (
                                <li>
                                    <a href={userData?.facebook}>
                                        <FontAwesomeIcon
                                            icon={faFacebook}
                                            className="icon"
                                            fixedWidth
                                        />
                                    </a>
                                    <span> facebook </span>
                                </li>
                            )}
                        </ul>
                    )}
                </LinksCard>
                <UserPostsContainer>
                    <Group>
                        <Title>Your posts</Title>
                    </Group>
                    {getCurrentUser() && currentUser.id === id ? (
                    <ProfilePostContainer>
                        {posts?.map((post,id)=>
                            <ProfilePost>
                                <ProfilePostTitle>
                                    <Link to={`/post/${post?._id}`}>
                                        {post?.title}
                                    </Link>
                                    <div style={{float:"right"}}>
                                        <DeleteButton onClick={() => deletePost(post?._id)}>
                                            <FontAwesomeIcon icon={faTrash} className="icon" fixedWidth />
                                        </DeleteButton>
                                        <EditButton>
                                            <FontAwesomeIcon icon={faEdit} className="icon" fixedWidth />
                                        </EditButton>
                                    </div>
                                </ProfilePostTitle>
                                <ProfilePostInformation>
                                    <p>{moment(new Date(post?.dCreatedDate)).fromNow()}</p>
                                </ProfilePostInformation>
                            </ProfilePost>
                        )}
                    </ProfilePostContainer>
                    )
                    : (
                        ""
                    )}
                </UserPostsContainer>
            </Container>
        </ProfileContainer>
        </>
    );
};

export default Profile;
