const mongoose = require("mongoose");

var CompanySchema = new mongoose.Schema({
	email: { type: String, required: true },
	password: { type: String, required: true },
	companyName: { type: String, required: true },
	role: { type: String, required: true, default: "Company" },
	profilePic: { type: String },
});

module.exports = mongoose.model("Company", CompanySchema);
