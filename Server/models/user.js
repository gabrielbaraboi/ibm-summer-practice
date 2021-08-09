const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema(
	{
		email: { type: String, required: true },
		password: { type: String, required: true },
		profilePic: { type: String, default: "" },
		website: { type: String, default: "" },
		linkedin: { type: String, default: "" },
		github: { type: String, default: "" },
		twitter: { type: String, default: "" },
		facebook: { type: String, default: "" },
		about: { type: String, default: "" },
	},
	{
		discriminatorKey: "role",
		collection: "Users",
	}
);

module.exports = mongoose.model("User", UserSchema);
