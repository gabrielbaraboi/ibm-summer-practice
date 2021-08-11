import { useEffect, useRef, useState } from "react";
import { getAllUsers, getCurrentUser } from "../../Services/auth.service";
import {
	createConversation,
	getAllConversations,
	getMessages,
	newMessage,
} from "../../Services/inbox.service";
import moment from "moment";
import { io } from "socket.io-client";
import ReactImageFallback from "react-image-fallback";

const AllConversations = () => {
	const [userData, setUserData] = useState();
	const [allUsers, setAllUsers] = useState([]);
	const [member, setMember] = useState("");
	const [conversations, setConversations] = useState([]);
	const [currentChat, setCurrentChat] = useState();
	const [messages, setMessages] = useState([]);
	const [newMessageText, setNewMessageText] = useState("");
	const scrollRef = useRef();
	const socket = useRef();
	const [arrivalMessage, setArrivalMessage] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);

	let allUsersFiltered;

	useEffect(() => {
		const currentUserData = getCurrentUser();
		setUserData(currentUserData);
	}, []);

	useEffect(() => {
		socket.current = io("ws://ibm-summer-practice.herokuapp.com/");
		socket.current.on("getMessage", (data) => {
			const senderID = { _id: data.senderId };
			setArrivalMessage({
				senderID: senderID,
				content: data.content,
				dCreatedDate: Date.now(),
			});
		});
	}, []);

	useEffect(() => {
		arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
	}, [arrivalMessage, currentChat]);

	useEffect(() => {
		socket.current.emit("addUser", userData?.id);
		socket.current.on("getUsers", (users) => {
			setOnlineUsers(users);
		});
	}, [userData]);

	console.log(onlineUsers);

	useEffect(() => {
		getAllConversations(userData?.id)
			.then((res) => {
				setConversations(res.data.conversations);
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
		getMessages(currentChat?._id)
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
		const receiverId =
			currentChat?.member2?._id !== userData.id
				? currentChat?.member2?._id
				: currentChat?.member1?._id;
		const content = newMessageText;
		if (/\S/.test(content)) {
			socket.current.emit("sendMessage", {
				senderId: userData.id,
				receiverId,
				content: newMessageText,
			});

			newMessage(currentChat?._id, { content })
				.then((res) => {
					setMessages([...messages, res.data]);
					setNewMessageText("");
				})
				.catch((err) => {
					console.log(err);
				});
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
			{allUsers.length === 0 ? (
				<center>No Users Yet!</center>
			) : (
				<div className="new-conversation-container">
					<div className="select-container">
						<select
							className="select-container__select"
							onChange={(e) => {
								setMember(e.target.value);
							}}
						>
							<option value="">Select a member!</option>
							{allUsersFiltered?.map(
								(user, idx) =>
									user?._id !== userData.id && (
										<option key={idx} value={user?._id}>
											{user?.companyName}
											{user?.firstName} {user?.lastName}
										</option>
									)
							)}
						</select>
					</div>
					<button onClick={submitConversation}>New conversation</button>
				</div>
			)}

			<div className="messenger">
				{conversations.length === 0 ? (
					<center>No conversations yet!</center>
				) : (
					<div className="chatMenu">
						<div className="chatMenuWrapper">
							{conversations?.map((conversation, idx) =>
								conversation?.member2?._id !== userData.id ? (
									<div onClick={() => setCurrentChat(conversation)}>
										<div
											className={`${
												currentChat?._id === conversation?._id && "chat-active"
											} conversation`}
											key={idx}
										>
											<ReactImageFallback
												className="conversationImg"
												src={`/profile/${conversation?.member2?._id}/getProfilePic`}
												fallbackImage={process.env.PUBLIC_URL + "/iconUser.jpg"}
											/>
											<span className="conversationName">
												{conversation?.member2?.companyName}
												{conversation?.member2?.firstName}{" "}
												{conversation?.member2?.lastName}
											</span>
										</div>
									</div>
								) : (
									<div onClick={() => setCurrentChat(conversation)}>
										<div
											className={`${
												currentChat?._id === conversation?._id && "chat-active"
											} conversation`}
											key={idx}
										>
											<ReactImageFallback
												className="conversationImg"
												src={`/profile/${conversation?.member1?._id}/getProfilePic`}
												fallbackImage={process.env.PUBLIC_URL + "/iconUser.jpg"}
											/>
											<span className="conversationName">
												{conversation?.member1?.companyName}
												{conversation?.member1?.firstName}
												{conversation?.member1?.lastName}
											</span>
										</div>
									</div>
								)
							)}
						</div>
					</div>
				)}
				<div className="chatBox">
					<div className="chatBoxWrapper">
						{currentChat ? (
							<>
								<div className="chatBoxTop">
									{messages.length !== 0 ? (
										messages.map((message) => (
											<div ref={scrollRef}>
												<div
													className={
														message?.senderID?._id
															? message?.senderID?._id === userData?.id
																? "message own"
																: "message"
															: message?.senderID === userData?.id
															? "message own"
															: "message"
													}
												>
													<div className="messageTop">
														<ReactImageFallback
															className="messageImg"
															src={`/profile/${
																message?.senderID?._id
																	? message?.senderID?._id
																	: message?.senderID
															}/getProfilePic`}
															fallbackImage={
																process.env.PUBLIC_URL + "/iconUser.jpg"
															}
														/>
														<p className="messageText">{message?.content}</p>
													</div>
													<div className="messageBottom">
														{moment(new Date(message?.dCreatedDate)).fromNow()}
													</div>
												</div>
											</div>
										))
									) : (
										<span className="noConversationText">
											You don't have any messages yet.
										</span>
									)}
								</div>
								<div className="chatBoxBottom">
									<textarea
										className="chatMessageInput"
										placeholder="write something..."
										onChange={(e) => setNewMessageText(e.target.value)}
										value={newMessageText}
										rows="2"
									></textarea>
									<button className="chatSubmitButton" onClick={submitMessage}>
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
			</div>
		</>
	);
};

export default AllConversations;
