import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUsers, getCurrentUser } from "../../Services/auth.service";
import {
    createConversation,
    getAllConversations,
    getMessages,
    newMessage,
} from "../../Services/inbox.service";
import moment from "moment";

const AllConversations = () => {
    const [userData, setUserData] = useState();
    const [allUsers, setAllUsers] = useState([]);
    const [member, setMember] = useState("");
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const scrollRef = useRef();

    let allUsersFiltered;

    useEffect(() => {
        const currentUserData = getCurrentUser();
        setUserData(currentUserData);
    }, []);

    useEffect(() => {
        getAllConversations(userData?.id)
            .then((res) => {
                setConversations(res.data.conversations);
                console.log(conversations);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        getAllUsers()
            .then((res) => {
                setAllUsers(res.data.users);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        getMessages(currentChat)
            .then((res) => {
                setMessages(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [currentChat]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const submitConversation = (e) => {
        e.preventDefault();
        const id = member;
        if (/\S/.test(id)) {
            createConversation({ id });
            window.location.reload();
        }
    };

    const submitMessage = (e) => {
        e.preventDefault();
        const content = message;
        if (/\S/.test(content)) {
            newMessage(currentChat, { content });
            window.location.reload();
        }
    };

    allUsersFiltered = allUsers.filter(
        (ar) =>
            !conversations.find(
                (rm) => rm.member2?._id === ar._id || rm.member1?._id === ar._id
            )
    );
    return (
        <>
            <div className="messenger">
                {conversations.length === 0 ? (
                    <center>No conversations yet!</center>
                ) : (
                    <div className="chatMenu">
                        <div className="chatMenuWrapper">
                            {conversations?.map((conversation, idx) =>
                                conversation?.member2?._id !== userData.id ? (
                                    <div
                                        onClick={() =>
                                            setCurrentChat(conversation?._id)
                                        }
                                    >
                                        <div className={`${currentChat === conversation?._id && 'chat-active' } conversation`} key={idx}>
                                            <img
                                                className="conversationImg"
                                                src={`/profile/${conversation?.member2?._id}/getProfilePic`}
                                            />
                                            <span className="conversationName">
                                                {
                                                    conversation?.member2
                                                        ?.companyName
                                                }{" "}
                                                {
                                                    conversation?.member2
                                                        ?.firstName
                                                }{" "}
                                                {
                                                    conversation?.member2
                                                        ?.lastName
                                                }
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        onClick={() =>
                                            setCurrentChat(conversation?._id)
                                        }
                                    >
                                        <div className="conversation" key={idx}>
                                            <img
                                                className="conversationImg"
                                                src={`/profile/${conversation?.member1?._id}/getProfilePic`}
                                            />
                                            <span className="conversationName">
                                                {
                                                    conversation?.member1
                                                        ?.companyName
                                                }{" "}
                                                {
                                                    conversation?.member1
                                                        ?.firstName
                                                }{" "}
                                                {
                                                    conversation?.member1
                                                        ?.lastName
                                                }
                                            </span>
                                        </div>
                                    </div>
                                )
                            )}{" "}
                        </div>
                    </div>
                )}
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        {currentChat ? (
                            <>
                                <div className="chatBoxTop">
                                    {messages.map((message) => (
                                        <div ref={scrollRef}>
                                            <div
                                                className={
                                                    message?.senderID?._id ===
                                                    userData?.id
                                                        ? "message own"
                                                        : "message"
                                                }
                                            >
                                                <div className="messageTop">
                                                    <img
                                                        className="messageImg"
                                                        src={`/profile/${message?.senderID?._id}/getProfilePic`}
                                                    />
                                                    <p className="messageText">
                                                        {message?.content}
                                                    </p>
                                                </div>
                                                <div className="messageBottom">
                                                    {moment(
                                                        new Date(
                                                            message?.dCreatedDate
                                                        )
                                                    ).fromNow()}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="chatBoxBottom">
                                    <textarea
                                        className="chatMessageInput"
                                        placeholder="write something..."
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        value={message}
                                        rows="2"
                                    ></textarea>
                                    <button
                                        className="chatSubmitButton"
                                        onClick={submitMessage}
                                    >
                                        Send
                                    </button>
                                </div>
                            </>
                        ) : (
                            <span className="noConversationText">
                                Open a conversation to start a chat.
                            </span>
                        )}
                    </div>
                </div>

                {allUsers.length === 0 ? (
                    <center>No Users Yet!</center>
                ) : (
                    <div>
                        <select
                            onChange={(e) => {
                                setMember(e.target.value);
                            }}
                        >
                            <option value="">Select a member!</option>
                            {allUsersFiltered?.map(
                                (user, idx) =>
                                    user?._id !== userData.id && (
                                        <option key={idx} value={user?._id}>
                                            {user?.companyName}{" "}
                                            {user?.firstName} {user?.lastName}
                                        </option>
                                    )
                            )}
                        </select>
                        <button onClick={submitConversation}>
                            New conversation
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default AllConversations;
