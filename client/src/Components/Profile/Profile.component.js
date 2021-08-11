import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
    ProfileCard,
    ProfileContainer,
    ProfilePostContainer,
    ProfilePost,
    ProfilePostTitle,
    ProfilePostInformation,
    ProfilePicture,
    ProfilePicSave,
    LinksCard,
    SpanLink,
    UserPostsContainer,
    Container,
    NameContainer,
    BackgroundPhoto,
    Group,
    EditBtn,
    ModalStyles,
    ModalForm,
    ModalClose,
    ModalSubmit,
    AboutContainer,
    InputLink,
    ProfilePicSelect,
    ProfilePicThumbnail,
    LinkList,
} from "./Profile.styledComponents";
import { DeleteButton,EditButton,ButtonWrapper } from "../Global.styledComponents";
import { faEdit, faCamera, faGlobe,faTrash } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faTwitter,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProfile, setProfilePic,modifyAboutMe,modifySocialMedia } from "../../Services/profile.service";
import { getCurrentUser, getAllUserPosts } from "../../Services/auth.service";
import ReactImageFallback from "react-image-fallback";
import moment from "moment";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { deletePost } from "../../Services/post.service";
import { PaginationBtn,PageSpan } from "../Posts/Posts.styledComponents";

const Profile = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState();
    const [currentUser, setCurrentUser] = useState([]);
    const [file, setFile] = useState(null);
    const [posts, setPosts] = useState([]);

    const [page, setPage] = useState(1);
	const [nextPage, setNextPage] = useState(1);
	const [totalPages, setTotalPages] = useState();

    const goNextPage = () => {
		if (nextPage) setPage(nextPage);
	};
	const goPrevPage = () => {
		if (page >= 2) setPage(page - 1);
	};

    const [linksData, setLinksData] = useState({
        website: userData?.website,
        github: userData?.github,
        twitter: userData?.twitter,
        linkedin: userData?.linkedin,
        facebook: userData?.facebook,
    });

    const [showModalProfilePic, setShowModalProfilePic] = useState(false);
    const [editSocialLinks, setEditSocialLinks] = useState(false);
    const [editAbout, setEditAbout] = useState(false);
    const [editPost, setEditPost] = useState(false);

    

    function handleChange(event) {
        event.persist();
        setLinksData((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    }

    const handleSubmitLinks = () => {
        modifySocialMedia(linksData);
    };

    const handleSubmitAbout = (event) => {
        if (event.target.description.value) {
            const data = { about: event.target.description.value };
            modifyAboutMe(data);
        }
    };

    const toggleEditSocialLinks = () => {
        setEditSocialLinks(false);
    };
    const toggleEditAbout = () => {
        setEditAbout(false);
    };
    const toggleEditPost = () => {
        setEditPost(false);
    }


    useEffect(
        () =>
            getProfile(id)
                .then((res) => {
                    setUserData(res.data.user);
                })
                .catch((err) => {
                    console.log(err.message);
                }),
        [id]
    );

    useEffect(() => {
		getAllUserPosts(
			id,
            page
		)
        .then((res) => {
            setPosts(res.data.posts);
            setNextPage(res.data.next);
            setTotalPages(res.data.total);
        })
        .catch((err) => {
            console.log(err);
            setPosts([]);
            setTotalPages(1);
            setNextPage(1);
        });
	}, [page,posts]);

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
                <Group>
                    <p>Edit</p>
                    <ModalClose onClick={openModalProfilePic}>X</ModalClose>
                </Group>
                <ModalForm onSubmit={handleSubmitProfilePic}>
                    <ProfilePicSelect htmlFor="profilePic">Select a Photo</ProfilePicSelect>
                    <input
                        filename={file}
                        onChange={(e) => setFile(e.target.files[0])}
                        type="file"
                        accept="image/*"
                        id="profilePic"
                        hidden
                    ></input>
                    {file ? <ProfilePicThumbnail src={URL.createObjectURL(file)} /> : null}
                    <ProfilePicSave type="submit">Save</ProfilePicSave>
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
                        {currentUser && currentUser.id === id ? (
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
                            {currentUser && currentUser.id === id ? (
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
                                    <Modal
                                        isOpen={editAbout}
                                        style={ModalStyles}
                                        onRequestClose={toggleEditAbout}
                                    >
                                        <Group>
                                            <p>Edit</p>
                                            <ModalClose onClick={toggleEditAbout}>X</ModalClose>
                                        </Group>
                                        
                                        <ModalForm onSubmit={handleSubmitAbout}>
                                            <textarea
                                                name="description"
                                                placeholder={userData?.about}
                                            ></textarea>
                                            <ModalSubmit type="submit">Save</ModalSubmit>
                                        </ModalForm>
                                    </Modal>
                                )
                            ) : (
                                ""
                            )} 
                        </Group>
                        <span>{userData?.about.length > 100 ? userData?.about.slice(0, 100) + "..." : userData?.about }</span>
                    </AboutContainer>
                </Container>
            </ProfileCard>
            <Container>
                <LinksCard>
                    <Group>
                        <p>Social media</p>
                        {currentUser && currentUser.id === id ? (
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
                            <Modal
                                isOpen={editSocialLinks}
                                style={ModalStyles}
                                onRequestClose={toggleEditSocialLinks}
                            >
                                 <Group>
                                    <p>Edit</p>
                                    <ModalClose onClick={toggleEditSocialLinks}>X</ModalClose>
                                </Group>
                                <ModalForm onSubmit={handleSubmitLinks}>
                                    <LinkList>
                                        <li>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faGlobe}
                                                    className="icon"
                                                    fixedWidth
                                                />
                                            </span>
                                            <span> website </span>
                                            <InputLink
                                                type="url"
                                                name="website"
                                                value={linksData?.website}
                                                onChange={handleChange}
                                            />
                                        </li>
                                        <li>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faGithub}
                                                    className="icon"
                                                    fixedWidth
                                                />
                                            </span>
                                            <span> github </span>
                                            <InputLink
                                                type="url"
                                                name="github"
                                                value={linksData?.github}
                                                onChange={handleChange}
                                            />
                                        </li>
                                        <li>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faTwitter}
                                                    className="icon"
                                                    fixedWidth
                                                />
                                            </span>
                                            <span> twitter </span>
                                            <InputLink
                                                type="url"
                                                name="twitter"
                                                value={linksData?.twitter}
                                                onChange={handleChange}
                                            />
                                        </li>
                                        <li>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faLinkedin}
                                                    className="icon"
                                                    fixedWidth
                                                />
                                            </span>
                                            <span> linkedin </span>
                                            <InputLink
                                                type="url"
                                                name="linkedin"
                                                value={linksData?.linkedin}
                                                onChange={handleChange}
                                            />
                                        </li>
                                        <li>
                                            <span>
                                                <FontAwesomeIcon
                                                    icon={faFacebook}
                                                    className="icon"
                                                    fixedWidth
                                                />
                                            </span>
                                            <span> facebook </span>
                                            <InputLink
                                                type="url"
                                                name="facebook"
                                                value={linksData?.facebook}
                                                onChange={handleChange}
                                            />
                                        </li>
                                    </LinkList>
                                    <ModalSubmit type="submit">Save</ModalSubmit>
                                </ModalForm>
                            </Modal>
                            )
                        ) : (
                            ""
                        )}
                    </Group>
                    {currentUser && currentUser.id === id ? (
                        <LinkList>
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
                        </LinkList>
                    ) : (
                        <LinkList>
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
                        </LinkList>
                    )}
                </LinksCard>
                <UserPostsContainer>
                    <Group>
                        <p>Your posts</p>
                    </Group>
                    <ProfilePostContainer>
                    {posts.length > 0 ? (
                        posts?.map((post,k)=>
                            <ProfilePost>
                                <ProfilePostTitle>
                                    <Link to={`/post/${post?._id}`}>
                                        {post?.title}
                                    </Link>
                                    {currentUser && currentUser.id === id ? (
                                    <ButtonWrapper>
                                        <DeleteButton onClick={() => deletePost(post?._id)}>
                                            <FontAwesomeIcon icon={faTrash} className="icon" fixedWidth />
                                        </DeleteButton>
                                        <EditButton>
                                            <FontAwesomeIcon icon={faEdit} className="icon" fixedWidth />
                                        </EditButton>
                                    </ButtonWrapper>
                                    ):(
                                        ""
                                    )}
                                </ProfilePostTitle>
                                <ProfilePostInformation>
                                    <p>{moment(new Date(post?.dCreatedDate)).fromNow()}</p>
                                </ProfilePostInformation>
                            </ProfilePost>
                        )
                        ):(
                            <p>No posts to show</p>
                        )}
                    </ProfilePostContainer>
                    <center>
                        <PaginationBtn disabled={page <= 1} onClick={goPrevPage}>
                            {" "}
                            &lt; Previous Page
                        </PaginationBtn>
                        <PageSpan>
                            {page}/{totalPages ? totalPages : 1}
                        </PageSpan>
                        <PaginationBtn disabled={!nextPage} onClick={goNextPage}>
                            Next Page &gt;
                        </PaginationBtn>
                    </center>
                </UserPostsContainer>
            </Container>
        </ProfileContainer>
        </>
    );
};

export default Profile;