const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
	email: { type: String, required: true },
	firstName: { type: String },
	lastName: { type: String },
	password: { type: String, required: true },
	role: { type: String, required: true },
	token: { type: String },
});

module.exports = mongoose.model("User", UserSchema);
