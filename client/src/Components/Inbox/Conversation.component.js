import { useState, useEffect } from "react";
import { getMessages, newMessage } from "../../Services/inbox.service";
import { useParams } from "react-router";
import { getCurrentUser } from "../../Services/auth.service";

const Conversation = () => {
    const { id } = useParams();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [userData, setUserData] = useState();

    useEffect(() => {
        const currentUserData = getCurrentUser();
        setUserData(currentUserData);
    }, []);

    useEffect(() => {
        getMessages(id)
            .then((res) => {
                setMessages(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const submitMessage = (e) => {
        e.preventDefault();
        const content = message;
        if (/\S/.test(content)) {
            newMessage(id, { content });
            window.location.reload();
        }
    };

    return (
        <>
            {userData && (
                <div>
                    <div>
                        {messages.length === 0 ? (
                            <center>No messages yet!</center>
                        ) : (
                            messages?.map((message, idx) => (
                                <p key={idx}>{message?.content}</p>
                            ))
                        )}
                    </div>
                    <div>
                        <input
                            placeholder="New message"
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                        />
                        <button onClick={submitMessage}>
                            Send Message
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Conversation;
