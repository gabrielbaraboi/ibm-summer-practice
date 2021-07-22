const User = require("../models/user");
const Company = require("../models/company");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
	try {
		const email = req.body.email;
		if (await isEmailAlreadyUsed(email))
			return res.status(409).json({ message: "This email is taken!" });
		if (req.body.role === "student") {
			//Get user Inputs
			const { email, firstName, lastName, password, role } = req.body;

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
			});

			return res.send("User created!");
		} else if (req.body.role === "company") {
			const { email, password, companyName, role } = req.body;

			if (!(email && companyName && password && role)) {
				res.status(400).json({ message: "All inputs are required!" });
			}

			const company = await Company.create({
				email: email.toLowerCase(),
				password: await encryptPass(password),
				companyName,
				role,
			});

			return res.send("Company account created!");
		} else {
			res.status(400).send("Role undefined");
		}
	} catch (err) {
		console.log(err);
	}
};

const loginUser = async (req, res) => {
	try {
		//Get user data
		const { email, password } = req.body;
		//Validate data
		if (!(email && password)) {
			res.status(400).json({ message: "All inputs are required!" });
		}
		//Verify if user exist
		const user = await User.findOne({ email });
		const company = await Company.findOne({ email });

		if (user && (await bcrypt.compare(password, user.password))) {
			// responseUser = {
			// 	id: user._id,
			// 	email: user.email,
			// 	firstName: user.firstName,
			// 	lastName: user.lastName,
			// 	role: 'student'
			// }
			// save token
			user.token = generateToken("user", email);
			//send user
			res.cookie("token", responseUser.token, { httpOnly: true });
			res.status(200).json({ user: responseUser });
		} else if (company && (await bcrypt.compare(password, company.password))) {
			// responseUser = {
			// 	id: company._id,
			// 	email: company.email,
			// 	companyName: company.companyName,
			// 	role: 'company'
			// }
			// save token
			company.token = generateToken("company", email);
			//send user
			res.cookie("token", responseUser.token, { httpOnly: true });
			res.status(200).json({ user: responseUser });
		} else {
			res.status(400).json({ message: "Invalid email or password!" });
		}
	} catch (err) {
		console.log(err);
	}
};

//FUNCTIONS
// encrypt password function
async function encryptPass(pass) {
	encryptedPassword = await bcrypt.hash(pass, 10);
	return encryptedPassword;
}

function generateToken(accType) {
	const token = jwt.sign({ _id: accType._id }, process.env.TOKEN_KEY);
	return token;
}

async function isEmailAlreadyUsed(email) {
	const user = await User.findOne({ email });
	if (user) return true;
	const company = await Company.findOne({ email });
	if (company) return true;
	return false;
}

const logout = async (req, res) => {
	try {
		res.clearCookie("token", { httpOnly: true });
		res
			.status(200)
			.json({ success: true, message: "User logged out successfully" });
	} catch (err) {
		console.log(err.message);
	}
};

module.exports = { registerUser, loginUser, logout };
