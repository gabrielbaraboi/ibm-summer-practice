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
    CardWrapper,
    NameContainer,
    BackgroundPhoto,
    Group,
    EditBtn,
    AboutContainer,
    InputLink,
    ProfilePicSelect,
    ProfilePicThumbnail,
    LinkList,
} from "./Profile.styledComponents";
import { DeleteButton,
    EditButton,
    ButtonWrapper,
    PageSpan,
    PaginationBtn,
    PaginationWrapper,
    ModalStyles,
    ModalForm,
    ModalClose,
    ModalSubmit, } from "../Global.styledComponents";
import { faEdit, faGlobe,faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
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
import { deletePost,getPost,updatePost } from "../../Services/post.service";

const Profile = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState();
    const [currentUser, setCurrentUser] = useState([]);
    const [file, setFile] = useState(null);
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState();

    const [page, setPage] = useState(1);
	const [nextPage, setNextPage] = useState();
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
    const [showEditPost, setShowEditPost] = useState(false);
    const [values, setValues] = useState({});

    const editPost = (postId) => {
        setShowEditPost(true);
        setPostId(postId);
    }

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

    const handleChangePost = (event) =>{
        event.persist();
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
        console.log(values);
    };

    const handleSubmitEdit = (event) => {
        event.preventDefault();
        updatePost(postId,values);
    };

    const toggleEditSocialLinks = () => {
        setEditSocialLinks(false);
    };
    const toggleEditAbout = () => {
        setEditAbout(false);
    };
    const toggleEditPost = () => {
        setShowEditPost(false);
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

    useEffect(
        () =>
            getPost(postId)
                .then((res) => {
                    setValues(res.data);
                })
                .catch((err) => {
                    console.log(err.message);
                }),
        [postId]
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
            setNextPage();
        });
	}, [page]);

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
                ariaHideApp={false}
            >
                <Group>
                    <p>Edit</p>
                    <ModalClose onClick={openModalProfilePic}>
                        <FontAwesomeIcon icon={faTimes} />
                    </ModalClose>
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
                                    icon={faPen}
                                    className="icon"
                                    fixedWidth
                                />
                            </button>
                        ) : null}
                    </ProfilePicture>
                </BackgroundPhoto>
                <CardWrapper>
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
                                        ariaHideApp={false}
                                    >
                                        <Group>
                                            <p>Edit</p>
                                            <ModalClose onClick={toggleEditAbout}>
                                            <FontAwesomeIcon icon={faTimes} />
                                            </ModalClose>
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
                </CardWrapper>
            </ProfileCard>
            <CardWrapper>
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
                                    <ModalClose onClick={toggleEditSocialLinks}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </ModalClose>
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
                                                value={linksData?.website || ""}
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
                                                value={linksData?.github || ""}
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
                                                value={linksData?.twitter || ""}
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
                                                value={linksData?.linkedin || ""}
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
                                                value={linksData.facebook || ""}
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
                    <Modal
                        isOpen={showEditPost}
                        style={ModalStyles}
                        onRequestClose={toggleEditPost}
                        ariaHideApp={false}
                    >
                        <Group>
                            <p>Edit</p>
                            <ModalClose onClick={toggleEditPost}>X</ModalClose>
                        </Group>
                        <ModalForm onSubmit={handleSubmitEdit}>
                        <Group>
                            <div>
                                <label>Title</label>
                                <InputLink
                                    type="text" 
                                    name="title"
                                    onChange={handleChangePost}
                                    value={values.title || "" }
                                    placeholder="Type here..."
                                    required
                                />
                            </div>
                            <div>
                                <label>Programming Language</label>
                                <InputLink
                                    type="text"
                                    name="programmingLanguage"
                                    onChange={handleChangePost}
                                    value={values.programmingLanguage || ""}
                                    placeholder="Type here..."
                                    required
                                />
                            </div>
                            <div>
                                <label>Work Hours</label>
                                <select
                                    type="text"
                                    name="workHours"
                                    onChange={handleChangePost}
                                    value={values.workHours || ""}
                                    required
                                >
                                    <option value="full-time">Full Time</option>
                                    <option value="part-time">Part Time</option>
                                </select>
                            </div>
                            <div>
                                <label>Work place</label>
                                <select
                                    type="text"
                                    name="workPlace"
                                    onChange={handleChangePost}
                                    value={values.workPlace || ""}
                                    required
                                >
                                    <option value="Iași">Iași</option>
                                    <option value="Cluj">Cluj</option>
                                    <option value="Brașov">Brașov</option>
                                    <option value="Timișoara">Timișoara</option>
                                    <option value="București">București</option>
                                    <option value="remote">Remote</option>
                                </select>
                            </div>
                            <div>
                                <label>Description</label>
                                <textarea 
                                    name="description"
                                    rows="3"
                                    onChange={handleChangePost}
                                    value={values.description || ""}
                                    placeholder="Type here..."
                                    required
                                >
                                </textarea>
                            </div>
                            </Group>
                            <ModalSubmit type="submit">Update</ModalSubmit>
                        </ModalForm>
                    </Modal>
                    {posts.length > 0 ? (
                        posts?.map((post,k)=>
                            <ProfilePost key={k}>
                                <ProfilePostTitle>
                                    <Link to={`/post/${post?._id}`}>
                                        {post?.title}
                                    </Link>
                                    {currentUser && currentUser.id === id ? (
                                    <ButtonWrapper>
                                        <DeleteButton onClick={() => deletePost(post?._id)}>
                                            <FontAwesomeIcon icon={faTrash} className="icon" fixedWidth />
                                        </DeleteButton>
                                        <EditButton onClick={() => editPost(post?._id)}>
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
                    <PaginationWrapper>
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
                    </PaginationWrapper>
                </UserPostsContainer>
            </CardWrapper>
        </ProfileContainer>
        </>
    );
};

export default Profile;