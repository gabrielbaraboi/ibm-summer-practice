const mongoose = require("mongoose");
const User = require("./user");
var StudentSchema = new mongoose.Schema(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
	},
	{
		discriminatorKey: "role",
		collection: "Users",
	}
);
module.exports = User.discriminator("Student", StudentSchema);
