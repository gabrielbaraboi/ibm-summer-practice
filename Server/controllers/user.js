const User = require("../models/user");
const Company = require("../models/company");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
	try {
		const email = req.body.email;
		if (await isEmailAlreadyUsed(email))
			return res.status(409).send("email is already used for an account");
		if (req.body.role === "Student") {
			//Get user Inputs
			const { email, firstName, lastName, password, role } = req.body;

			// Validate data
			if (!(email && firstName && lastName && password && role)) {
				res.status(400).send("All inputs are required");
			}

			//create user to db
			const user = await User.create({
				email: email.toLowerCase(),
				firstName,
				lastName,
				password: await encryptPass(password),
				role,
			});

			//save Token
			user.token = generateToken("user", email);
			return res.send("User created!");
		} else if (req.body.role === "Company") {
			const { email, password, companyName, role } = req.body;

			if (!(email && companyName && password && role)) {
				res.status(400).send("All inputs are required");
			}

			const company = await Company.create({
				email: email.toLowerCase(),
				password: await encryptPass(password),
				companyName,
				role,
			});
			//save token
			company.token = generateToken("company", email);
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
			res.status(400).send("All inputs are required");
		}
		//Verify if user exist
		const user = await User.findOne({ email });
		const company = await Company.findOne({ email });

		if (user && (await bcrypt.compare(password, user.password))) {
			const token = generateToken(user, email);
			res.header("auth-token",token).json(token);
		} else if (company && (await bcrypt.compare(password, company.password))) {
			const token = generateToken(company, email);
			res.header("auth-token",token).json(token);
		} else {
			res.status(400).send("Invalid email or password");
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

function generateToken(accType, email) {
	const token = jwt.sign({_id: accType._id},process.env.TOKEN_KEY);
	return token;
}
async function isEmailAlreadyUsed(email) {
	const user = await User.findOne({ email });
	if (user) return true;
	const company = await Company.findOne({ email });
	if (company) return true;
	return false;
}
module.exports = { registerUser, loginUser };
