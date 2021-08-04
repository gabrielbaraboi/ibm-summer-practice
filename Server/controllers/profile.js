const User = require("../models/user");
const Company = require("../models/company");
const ibm = require("./IBMfunctions");

const getUserProfilePic = async (req, res) => {
	const id = req.params.id;
	try {
		let user = await User.findById(id);
		if (!user) {
			user = await Company.findById(id);
		}
		if (user.profilePic !== "") {
			ibm
				.getPic(user.profilePic)
				.on("error", (err) => {
					return res.status(404).json({ message: err.message });
				})
				.pipe(res)
				.on("error", (err) => {
					return res.status(404).json({ message: err.message });
				});
		}
	} catch (err) {
		return res.status(404).json({ message: err.message });
	}
};

const getUserDetails = async (req, res) => {
	const id = req.params.id;
	try {
		let user = await User.findById(id);
		if (!user) {
			user = await Company.findById(id);
		}
		return res.status(200).json({ user })
	} catch (err) {
		return res.status(404).json({ message: err.message });
	}
};

module.exports = { getUserProfilePic, getUserDetails };
