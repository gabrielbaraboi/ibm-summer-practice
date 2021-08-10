const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Utils = require("../utils/utilFunctions");
const Key = require("../models/key");
const Mailer = require("../config/nodemailer");
const Post = require("../models/post");
const Comment = require("../models/comment");
const Student = require("../models/student.js");
const Company = require('../models/company.js');

//nodemailer setup
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
			const user = await Student.create({
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

			const company = await Company.create({
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

const generateSecurityKey = async (req, res) => {
	try
	{
		const secret = genRandomString();
		console.log(secret);
		const user = await User.findById(req.user._id);
		Mailer.transporter.sendMail(Mailer.setOptions(user.email,secret),async (err,data)=>{
			if(err)
			{
				console.log(err);
				res.status(400).json({message: "can't send the security key to your email"})
			}
			else
			{	
				const ExistingKey = await Key.findOne({OwnerID: req.user._id})
				if(ExistingKey)
				{
					ExistingKey.content = secret;
					await ExistingKey.save();
					res.status(200).json({message: "key sent"});
				}
				else
				{
					await Key.create({
						content:secret,
						OwnerID:req.user._id
					})
					res.status(200).json({message: "key sent"})
				}
			}
		})
	}
	catch(e)
	{
		console.log(e);
		res.status(400).json(e.message);
	}
}
const changePassword = async (req,res) => {
	try {
		const user = await User.findById(req.user._id);
		if(req.body.password)
		{
			user.password = await encryptPass(req.body.password);
			await user.save();
			res.status(200).json({message: "password changed succesfully"});
		}
		else
		{
			res.status(400).json({message: "password can't be null"});
		}
	} catch (e) {
		console.log(e);
		res.status(400).json(e.message);
	}
}
const deleteAccount = async (req,res) => {
	try{
		//delete all comments sent by user
		await Comment.deleteMany({'createdBy' : req.user._id})
		//get all posts created by user
		const posts = await Post.find({'createdBy' : req.user._id})
		posts.forEach(async el => {
			//iterate through each post created by the user
			//deleted all comments added on that particular post
			console.log(el._id);
			await Comment.deleteMany({'parentPostId': el._id});
			//delete the post itself 
			
			await Post.findByIdAndDelete(el._id);	
		});
		await User.findByIdAndDelete(req.user._id);
		res.status(200).json({message: "account deleted successfully"});
	}catch(e)
	{
		console.log(e);
		res.status(500).json(e.message);
	}
}
const Test = (req,res) => {
	res.status(200).json({message: "check key middleware works"});
}
function genRandomString()
{
	return Math.random().toString(36).substr(2,5);
}
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

module.exports = { registerUser, loginUser, getAllUsers,generateSecurityKey,Test,changePassword,deleteAccount };
