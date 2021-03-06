import React, { useState, useEffect } from "react";
import {
    CardView,
    Div,
    SettingsForm,
    Content,
    View,
    Box,
    Button,
    Text,
    Body,
    Icon,
    InputType,
    InputContainer,
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
import { ModalStyles, ModalForm, ModalClose } from "../Global.styledComponents";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../../Services/auth.service";

const Settings = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState();
    const [secretKey, setSecretKey] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showModalDeleteAccount, setShowModalDeleteAccount] = useState(false);
    const [showModalChangePassword, setShowModalChangePassword] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
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

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(timeLeft > 1 && timeLeft - 1);
        }, 1000);
    });

    const handleSubmitDeleteAccount = (e) => {
        if (secretKey.length === 5) {
            const data = { key: secretKey };
            deleteAccount(data);
            logout();
        }
    };

    const handleSubmitChangePassword = () => {
        if (secretKey.length === 5 && newPassword === confirmPassword && newPassword.length > 3) {
            const data = { key: secretKey, password: newPassword };
            updatePassword(data);
            window.location.reload();
        }
    };

    const handleGenerateKey = () => {
        generateSecretKey();
        setTimeLeft(30);
    };

    return (
        <Body>
            <SettingsForm>
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
                                        {userData?.firstName}{" "}
                                        {userData?.lastName}
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
                </Box>
                <Modal
                    isOpen={showModalDeleteAccount}
                    style={ModalStyles}
                    onRequestClose={openModalDeleteAccount}
                >
                    <ModalClose onClick={openModalDeleteAccount}>
                        <FontAwesomeIcon icon={faTimes} />
                    </ModalClose>

                    <ModalForm>
                        <Button
                            onClick={() => {
                                handleGenerateKey();
                            }}
                            disabled={timeLeft > 0}
                        >
                            Send Code {timeLeft}
                        </Button>
                        <InputContainer>
                            <label htmlFor="code">Code</label>
                            <input
                                onChange={(e) => setSecretKey(e.target.value)}
                                type="text"
                                minLength="5"
                                maxLength="5"
                                id="code"
                            />
                        </InputContainer>
                        <Button
                            disabled={secretKey.length !== 5}
                            onClick={handleSubmitDeleteAccount}
                        >
                            Delete
                        </Button>
                    </ModalForm>
                </Modal>
                <Modal
                    isOpen={showModalChangePassword}
                    style={ModalStyles}
                    onRequestClose={openModalChangePassword}
                >
                    <ModalClose onClick={openModalChangePassword}>
                        <FontAwesomeIcon icon={faTimes} />
                    </ModalClose>
                    <ModalForm>
                        <Button
                            onClick={() => {
                                handleGenerateKey();
                            }}
                            disabled={timeLeft > 0}
                        >
                            Send Code {timeLeft}
                        </Button>
                        <InputContainer>
                            <label htmlFor="code">Code</label>
                            <input
                                onChange={(e) => setSecretKey(e.target.value)}
                                type="text"
                                minLength="5"
                                maxLength="5"
                                id="code"
                            />
                        </InputContainer>
                        <InputContainer>
                            <label htmlFor="password">New Password</label>
                            <input
                                onChange={(e) => setNewPassword(e.target.value)}
                                type="password"
                                minLength="4"
                                id="password"
                            />
                        </InputContainer>
                        <InputContainer>
                            <label htmlFor="confirm">Confirm Password</label>
                            <input
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                type="password"
                                minLength="4"
                                id="confirm"
                            />
                        </InputContainer>
                        <Button
                            type="submit"
                            disabled={secretKey.length !== 5}
                            onClick={handleSubmitChangePassword}
                        >
                            Change
                        </Button>
                    </ModalForm>
                </Modal>
            </SettingsForm>
        </Body>
    );
};

export default Settings;
