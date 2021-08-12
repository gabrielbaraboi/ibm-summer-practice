const User = require("../models/user");
const Company = require("../models/company");
const ibm = require("./IBMfunctions");
const Utils = require("../utils/utilFunctions");
const getUserProfilePic = async (req, res) => {
	const id = req.params.id;
	try {
		const user = await Utils.getUserFromID(id);
		if (user) {
			if (user.profilePic !== "") {
				ibm
					.getPic(user.profilePic)
					.on("error", (err) => {
						res.status(404).json({ message: err.message });
					})
					.pipe(res)
					.on("error", (err) => {
						res.status(404).json({ message: err.message });
						return;
					});
			} else {
				res.status(400).json({ message: "User doesn`t have profile pic!" });
			}
		} else {
			return res
				.status(400)
				.json({ message: "user id wasn't found in database" });
		}
	} catch (err) {
		return res.status(404).json({ message: err.message });
	}
};
const getUserDetails = async (req, res) => {
	const id = req.params.id;
	try {
		const user = await Utils.getUserFromID(id);
		if (user) return res.status(200).json({ user });
		else
			return res
				.status(400)
				.json({ message: "user id wasn't found in the database" });
	} catch (err) {
		return res.status(404).json({ message: err.message });
	}
};
const setProfilePic = async (req, res) => {
	try {
		const user = await Utils.getUserFromID(req.user._id);
		if (user) {
			if (user.profilePic) await ibm.deletePic(user.profilePic);
			const image = req.file;
			let imageName = "";
			if (image) {
				imageName = image.filename;
				await Utils.uploadPic(image, imageName);
			}
			user.profilePic = imageName;
			await user.save();
			res.status(200).json({ message: "profile pic set successfully" });
		} else
			return res
				.status(404)
				.json({ message: "user id wasn't found in the database" });
	} catch (e) {
		console.log(e);
		res.status(400).json(e.message);
	}
};

const modifySocialMedia = async (req, res) => {
	const KEYS_TO_INCLUDE = [
		"website",
		"linkedin",
		"github",
		"twitter",
		"facebook",
	];
	try {
		const user = await Utils.getUserFromID(req.user._id);
		const keys = Object.keys(req.body).filter((key) =>
			KEYS_TO_INCLUDE.includes(key)
		);
		keys.forEach((key) => {
			user[key] = req.body[key];
		});
		await user.save();
		res.status(200).json(user);
	} catch (err) {
		console.log(err);
		res.status(500).json(err.message);
	}
};

const modifyAboutMe = async (req, res) => {
	try {
		const user = await Utils.getUserFromID(req.user._id);
		if (user.about !== req.body.about) {
			user.about = req.body.about;
			await user.save();
		}
		res.status(200).json(user);
	} catch (err) {
		console.log(err);
		res.status(500).json(err.message);
	}
};
module.exports = {
	getUserProfilePic,
	getUserDetails,
	setProfilePic,
	modifySocialMedia,
	modifyAboutMe,
};
