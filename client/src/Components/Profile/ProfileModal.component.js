import React from "react";
import { useState } from "react";
import {
    faFacebook,
    faTwitter,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
    BackgroundPage,
    CloseModalButton,
    ModalContent,
    ModalWrapper,
    Group,
    InputLink,
} from "./ProfileModal.styledcomponent";
import {
    modifyAboutMe,
    modifySocialMedia,
} from "../../Services/profile.service";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProfileModal = ({
    toggleEditAbout,
    toggleEditSocialLinks,
    type,
    userData,
}) => {
    const [linksData, setLinksData] = useState({
        website: userData?.website,
        github: userData?.github,
        twitter: userData?.twitter,
        linkedin: userData?.linkedin,
        facebook: userData?.facebook,
    });

    function handleChange(event) {
        event.persist();
        setLinksData((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    }

    const handleSubmitAbout = (event) => {
        if (event.target.description.value) {
            const data = { about: event.target.description.value };
            modifyAboutMe(data);
        }
    };

    const handleSubmitLinks = () => {
        modifySocialMedia(linksData);
    };

    return (
        <>
            <BackgroundPage>
                <ModalWrapper>
                    <Group>
                        <p>Edit</p>
                        {type === "links" && (
                            <CloseModalButton
                                onClick={() => toggleEditSocialLinks()}
                            >
                                X
                            </CloseModalButton>
                        )}
                        {type === "about" && (
                            <CloseModalButton onClick={() => toggleEditAbout()}>
                                X
                            </CloseModalButton>
                        )}
                    </Group>
                    <ModalContent>
                        {type === "about" && (
                            <form onSubmit={handleSubmitAbout}>
                                <textarea
                                    name="description"
                                    rows="3"
                                    placeholder={userData?.about}
                                ></textarea>
                                <button type="submit">Save</button>
                            </form>
                        )}
                        {type === "links" && (
                            <form onSubmit={handleSubmitLinks}>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon
                                            icon={faGlobe}
                                            className="icon"
                                            fixedWidth
                                        ></FontAwesomeIcon>
                                        <span> website </span>
                                        <InputLink
                                            type="url"
                                            name="website"
                                            value={linksData?.website}
                                            onChange={handleChange}
                                        />
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            className="icon"
                                            fixedWidth
                                        ></FontAwesomeIcon>
                                        <span> github </span>
                                        <InputLink
                                            type="url"
                                            name="github"
                                            value={linksData?.github}
                                            onChange={handleChange}
                                        />
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            icon={faTwitter}
                                            className="icon"
                                            fixedWidth
                                        ></FontAwesomeIcon>
                                        <span> twitter </span>
                                        <InputLink
                                            type="url"
                                            name="twitter"
                                            value={linksData?.twitter}
                                            onChange={handleChange}
                                        />
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            icon={faLinkedin}
                                            className="icon"
                                            fixedWidth
                                        ></FontAwesomeIcon>
                                        <span> linkedin </span>
                                        <InputLink
                                            type="url"
                                            name="linkedin"
                                            value={linksData?.linkedin}
                                            onChange={handleChange}
                                        />
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            icon={faFacebook}
                                            className="icon"
                                            fixedWidth
                                        ></FontAwesomeIcon>
                                        <span> facebook </span>
                                        <InputLink
                                            type="url"
                                            name="facebook"
                                            value={linksData?.facebook}
                                            onChange={handleChange}
                                        />
                                    </li>
                                </ul>
                                <button type="submit">Save</button>
                            </form>
                        )}
                    </ModalContent>
                </ModalWrapper>
            </BackgroundPage>
        </>
    );
};
