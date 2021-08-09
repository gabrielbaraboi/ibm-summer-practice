const mongoose = require("mongoose");
const User = require("./user");
var CompanySchema = new mongoose.Schema(
	{
		companyName: { type: String, required: true },
	},
	{
		discriminatorKey: "role",
		collection: "Users",
	}
);

module.exports = User.discriminator("Company", CompanySchema);
