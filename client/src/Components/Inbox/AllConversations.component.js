import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllUsers, getCurrentUser } from "../../Services/auth.service";
import {
	createConversation,
	getAllConversations,
} from "../../Services/inbox.service";

const AllConversations = () => {
	const [userData, setUserData] = useState();
	const [allUsers, setAllUsers] = useState([]);
	// const [allCompanies, setAllCompanies] = useState([]);
	const [member, setMember] = useState("");
	const [conversations, setConversations] = useState([]);
	let allUsersFiltered;
	// let allCompaniesFiltered;

	useEffect(() => {
		const currentUserData = getCurrentUser();
		setUserData(currentUserData);
	}, []);

	useEffect(() => {
		getAllConversations(userData?.id)
			.then((res) => {
				setConversations(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		getAllUsers()
			.then((res) => {
				setAllUsers(res.data.users);
				console.log(res.data.users);
				// setAllCompanies(res.data.companies);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const submitConversation = (e) => {
		e.preventDefault();
		const id = member;
		if (/\S/.test(id)) {
			createConversation({ id });
			window.location.reload();
		}
	};

	allUsersFiltered = allUsers.filter(
		(ar) => !conversations.find((rm) => rm.member2 === ar._id)
	);

	return (
		<>
			{userData && (
				<div>
					<div>
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
													{user?.firstName}
												</option>
											)
									)}
									{/* {allCompaniesFiltered?.map(
										(company, idx) =>
											company?._id !== userData.id && (
												<option key={idx} value={company?._id}>
													{company?.companyName}
												</option>
											)
									)} */}
								</select>
								<button onClick={submitConversation}>New conversation</button>
							</div>
						)}
					</div>
					<div>
						{conversations.length === 0 ? (
							<center>No conversations yet!</center>
						) : (
							conversations?.map((conversation, idx) => (
								<p key={idx}>
									<Link to={`/conversation/${conversation?._id}`}>
										{conversation?.member2}
									</Link>{" "}
								</p>
							))
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default AllConversations;
