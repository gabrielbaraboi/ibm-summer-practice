import React, { useState, useEffect } from "react";
import {
    CardView,
    Div,
    SettingsForm,
    Content,
    View,
    Box,
    IconContext,
    Button,
    Text,
    Body,
    Icon,
    InputType,
    ActionButton,
    Name,
    Title,
    DeleteButton,
} from "./Settings.styledComponents";
import ReactImageFallback from "react-image-fallback";
import { ProfilePicture } from "../Settings/Settings.styledComponents";
import { getProfile } from "../../Services/profile.service";
import {
    deleteAccount,
    generateSecretKey,
    updatePassword,
} from "../../Services/settings.service";
import Modal from "react-modal";
import {
    ModalStyles,
    ModalForm,
    ModalClose,
} from "../Profile/Profile.styledComponents";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Settings = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState();
    const [secretKey, setSecretKey] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showModalDeleteAccount, setShowModalDeleteAccount] = useState(false);
    const [showModalChangePassword, setShowModalChangePassword] =
        useState(false);
    const openModalDeleteAccount = (e) => {
        setShowModalDeleteAccount((prev) => !prev);
    };
    const openModalChangePassword = (e) => {
        setShowModalChangePassword((prev) => !prev);
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

    const handleSubmitDeleteAccount = (e) => {
        if (secretKey.length === 5) {
            const data = { key: secretKey };
            deleteAccount(data);
        }
    };

    const handleSubmitChangePassword = () => {
        if (secretKey.length === 5 && newPassword === confirmPassword) {
            const data = { key: secretKey, password: newPassword };
            updatePassword(data);
            window.location.reload();
        }
    };

    const handleGenerateKey = () => {
        generateSecretKey();
    };

    return (
        <Body>
            <Box>
                <Title>Settings</Title>
            </Box>
            <View>
                <Box>
                    <Icon>
                        <ProfilePicture>
                            <ReactImageFallback
                                src={`/profile/${id}/getProfilePic`}
                                fallbackImage={
                                    process.env.PUBLIC_URL + "/iconUser.jpg"
                                }
                            />
                        </ProfilePicture>
                    </Icon>
                </Box>
                <Box>
                    <Name>
                        <span>
                            {userData?.companyName}
                            {userData?.firstName} {userData?.lastName}
                        </span>
                    </Name>
                    <Name>
                        <span>{userData?.role}</span>
                    </Name>
                </Box>
                <Box>
                    <DeleteButton onClick={openModalDeleteAccount}>
                        Delete Account
                    </DeleteButton>
                </Box>
            </View>
            <Box>
                <CardView>
                    <Content>
                        <Text>Email</Text>
                        <InputType>
                            <Div>
                                <span>{userData?.email} </span>
                            </Div>
                        </InputType>
                        <Text>Display Name</Text>
                        <InputType>
                            <Div>
                                <span>
                                    {" "}
                                    {userData?.firstName} {userData?.lastName}
                                    {userData?.companyName}
                                </span>
                            </Div>
                        </InputType>
                        <Text type="password">Password</Text>
                        <InputType>
                            <Div>
                                <InputType>*******</InputType>
                                <Button onClick={openModalChangePassword}>
                                    Edit
                                </Button>
                            </Div>
                        </InputType>
                    </Content>
                </CardView>
                <ActionButton type="submit">Save</ActionButton>
            </Box>
            <Modal
                isOpen={showModalDeleteAccount}
                style={ModalStyles}
                onRequestClose={openModalDeleteAccount}
            >
                <ModalClose onClick={openModalDeleteAccount}>X</ModalClose>
                <button
                    onClick={() => {
                        handleGenerateKey();
                    }}
                >
                    Send Code
                </button>
                <label htmlFor="code">Code</label>
                <input
                    onChange={(e) => setSecretKey(e.target.value)}
                    type="text"
                    minLength="5"
                    maxLength="5"
                    id="code"
                />
                <button
                    disabled={secretKey.length !== 5}
                    onClick={handleSubmitDeleteAccount}
                >
                    Delete
                </button>
            </Modal>
            <Modal
                isOpen={showModalChangePassword}
                style={ModalStyles}
                onRequestClose={openModalChangePassword}
            >
                <ModalClose onClick={openModalChangePassword}><FontAwesomeIcon icon={faTimes}/></ModalClose>
                <ModalForm>
                    <button
                        onClick={() => {
                            handleGenerateKey();
                        }}
                    >
                        Send Code
                    </button>
                    <label htmlFor="code">Code</label>
                    <input
                        onChange={(e) => setSecretKey(e.target.value)}
                        type="text"
                        minLength="5"
                        maxLength="5"
                        id="code"
                    />
                    <label htmlFor="password">New Password</label>
                    <input
                        onChange={(e) => setNewPassword(e.target.value)}
                        type="password"
                        minLength="4"
                        id="password"
                    />
                    <label htmlFor="confirm">Confirm Password</label>
                    <input
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        minLength="4"
                        id="confirm"
                    />
                    <button
                        disabled={secretKey.length !== 5}
                        onClick={handleSubmitChangePassword}
                    >
                        Change
                    </button>
                </ModalForm>
            </Modal>
        </Body>
    );
};

export default Settings;
