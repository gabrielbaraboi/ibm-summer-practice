import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
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
// import { FaEllipsisH } from 'react-icons/fa'
import { useParams } from "react-router-dom";
import ReactImageFallback from "react-image-fallback";
import { ProfilePicture } from "../Settings/Settings.styledComponents";
import { getProfile } from "../../Services/profile.service";
import { settings } from "../../Services/settings.service";
import RegisterValidationRules from "../../Services/Validation/RegisterValidationRules";
import useForm from "../../customHooks/userForm";

const Settings = ({ onSubmit, authError }) => {
	const { values, errors, handleChange, handleSubmit } = useForm(
		sendData,
		RegisterValidationRules
	);

	const { id } = useParams();
	const [userData, setUserData] = useState();

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

	const [showText1, setShowText1] = useState(false);
	const [showText2, setShowText2] = useState(false);
	const [showText3, setShowText3] = useState(false);
	const onClick1 = () => setShowText1(true);
	const onClick2 = () => setShowText2(true);
	const onClick3 = () => setShowText3(true);

	function sendData() {
		const formData = new FormData();
		const data = {
			email: values.email,
			password: values.password,
			role: values.role,
		};

		if (values.role === "Company") {
			data.companyName = values.companyName;
		}
		if (values.role === "Student") {
			data.firstName = values.firstName;
			data.lastName = values.lastName;
		}
		formData.append("data", JSON.stringify(data));
		onSubmit(formData);
	}

	return (
		<Body>
			<SettingsForm onSubmit={handleSubmit}>
				<Box>
					<Title>Settings</Title>
				</Box>
				<Box>
					{/* <IconContext>
						<FaEllipsisH />
					</IconContext> */}
				</Box>
				<View>
					<Box>
						<Icon>
							<ProfilePicture>
								<ReactImageFallback
									src={`/profile/${id}/getProfilePic`}
									fallbackImage={process.env.PUBLIC_URL + "/iconUser.jpg"}
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
					</Box>
					<Box>
						<DeleteButton>Delete Account</DeleteButton>
					</Box>
				</View>
				<Box>
					<CardView>
						<Content>
							<Text>Display Name</Text>
							{userData?.role === "Student" && (
								<React.Fragment>
									<InputType>
										{showText1 ? (
											<Div>
												<input
													autoComplete="off"
													placeholder="First Name"
													className={`input ${errors.firstName && "is-danger"}`}
													type="text"
													name="firstName"
													onChange={handleChange}
													value={values.firstName || ""}
												/>
												{errors.firstName && (
													<p className="help is-danger">{errors.firstName}</p>
												)}
												<input
													autoComplete="off"
													placeholder="Last Name"
													className={`input ${errors.lastName && "is-danger"}`}
													type="text"
													name="lastName"
													onChange={handleChange}
													value={values.lastName || ""}
												/>
												{errors.lastName && (
													<p className="help is-danger">{errors.lastName}</p>
												)}
											</Div>
										) : (
											<Div>
												<span>
													{userData?.firstName} {userData?.lastName}
												</span>
												<Button onClick={onClick1}>Edit</Button>
											</Div>
										)}
									</InputType>
								</React.Fragment>
							)}
							{userData?.role === "Company" && (
								<InputType>
									{showText1 ? (
										<Div>
											<input
												autoComplete="off"
												placeholder="Company Name"
												className={`input ${errors.CompanyName && "is-danger"}`}
												type="text"
												name="companyName"
												onChange={handleChange}
												value={values.companyName || ""}
											/>
											{errors.companyName && (
												<p className="help is-danger">{errors.companyName}</p>
											)}
										</Div>
									) : (
										<Div>
											<span>{userData?.companyName}</span>
											<Button onClick={onClick1}>Edit</Button>
										</Div>
									)}
								</InputType>
							)}
							<Text>Email</Text>
							<InputType>
								{showText2 ? (
									<Div>
										<input
											autoComplete="off"
											placeholder="Email"
											className={`input ${errors.email && "is-danger"}`}
											type="text"
											name="email"
											onChange={handleChange}
											value={values.email || ""}
										/>
										{errors.email && (
											<p className="help is-danger">{errors.email}</p>
										)}
									</Div>
								) : (
									<Div>
										<span>{userData?.email} </span>
										<Button onClick={onClick2}>Edit</Button>
									</Div>
								)}
							</InputType>
							<Text type="password">Password</Text>
							<InputType>
								{showText3 ? (
									<Div>
										{" "}
										<input
											placeholder="Password"
											className={`input ${errors.password && "is-danger"}`}
											type="password"
											name="password"
											onChange={handleChange}
											value={values.password || ""}
										/>
										{errors.password && (
											<p className="help is-danger">{errors.password}</p>
										)}{" "}
									</Div>
								) : (
									<Div>
										{" "}
										<InputType>*******</InputType>
										<Button onClick={onClick3}>Edit</Button>
									</Div>
								)}
							</InputType>
						</Content>
					</CardView>
					<ActionButton type="submit">Save</ActionButton>
				</Box>
			</SettingsForm>
		</Body>
	);
};

export default () => {
	const [authError, setAuthError] = useState(false);
	const history = useHistory();

	const handleSubmit = async (data) => {
		settings(data)
			.then(() => {
				history.push("/");
			})
			.catch((err) => {
				setAuthError(err.response.data.message);
			});
	};

	return <Settings onSubmit={handleSubmit} authError={authError} />;
};
