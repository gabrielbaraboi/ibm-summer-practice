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
			// res.status(200).json(await ibm.getPic(user.profilePic));
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
		console.log(err);
	}
};

module.exports = { getUserProfilePic };
