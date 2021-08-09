const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ibm = require("./IBMfunctions");
const fs = require("fs");
const Utils = require("../utils/utilFunctions");

const registerUser = async (req, res) => {
	try {
		const data = JSON.parse(req.body.data);
		const { email, role } = data;
		const image = req.file;

		let imageName = "";
		if (image) {
			imageName = image.filename;
		}

		if (await isEmailAlreadyUsed(email))
			return res.status(409).json({ message: "This email is taken!" });
		if (role === "Student") {
			//Get user Inputs
			const { email, firstName, lastName, password, role } = data;

			// Validate data
			if (!(email && firstName && lastName && password && role)) {
				res.status(400).json({ message: "All inputs are required!" });
			}

			//create user to db
			const user = await User.create({
				email: email.toLowerCase(),
				firstName,
				lastName,
				password: await encryptPass(password),
				role,
				profilePic: imageName,
			});
			await Utils.uploadPic(image, imageName);
			res.send("User created!");
		} else if (role === "Company") {
			const { email, password, companyName, role } = data;

			if (!(email && companyName && password && role)) {
				res.status(400).json({ message: "All inputs are required!" });
			}

			const company = await User.create({
				email: email.toLowerCase(),
				password: await encryptPass(password),
				companyName,
				role,
				profilePic: imageName,
			});
			await Utils.uploadPic(image, imageName);
			return res.json({ message: "Company account created!" });
		} else {
			res.status(400).json({ message: "Role undefined" });
		}
	} catch (err) {
		console.log(err);
		res.status(400).json({ message: "Register failed!" });
	}
};

const loginUser = async (req, res) => {
	try {
		let responseUser;
		const { email, password } = req.body;

		if (!(email && password)) {
			res.status(400).json({ message: "All inputs are required!" });
		}

		const user = await User.findOne({ email });

		if (user && (await bcrypt.compare(password, user.password))) {
			responseUser = {
				id: user._id,
				email: user.email,
				role: user.role
			};
			if (user.role === "Student") {
				responseUser.firstName = user.firstName;
				responseUser.lastName = user.lastName;
			} else if (user.role === "Company") {
				responseUser.companyName = user.companyName;
			}

			responseUser.accessToken = generateToken(responseUser);
			res.status(200).json({ user: responseUser });
		} else {
			res.status(400).json({ message: "Invalid email or password!" });
		}
	} catch (err) {
		console.log(err);
	}
};
const getAllUsers = async (req, res) => {
	try {
		const users = await User.find();

		if (users) {
			res.status(200).json({ users });
		} else {
			res.status(400).json({ message: "Can`t find any User" });
		}
	} catch (err) {
		res.status(400).json({ message: "Can`t get any user" });
	}
};

//FUNCTIONS
// encrypt password function
async function encryptPass(pass) {
	encryptedPassword = await bcrypt.hash(pass, 10);
	return encryptedPassword;
}

function generateToken(accType) {
	const token = jwt.sign({ _id: accType.id }, process.env.TOKEN_KEY, {
		expiresIn: 86400, // 24 hours
	});
	return token;
}

async function isEmailAlreadyUsed(email) {
	const user = await User.findOne({ email });
	if (user) return true;

	return false;
}

module.exports = { registerUser, loginUser, getAllUsers };
