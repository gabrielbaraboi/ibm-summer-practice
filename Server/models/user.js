const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
	email: { type: String, required: true },
	firstName: { type: String, required: true },
	lastName: { type: String,required: true},
	password: { type: String, required: true },
	role: { type: String, required: true, default: "Student"},
	token: { type: String },
});

module.exports = mongoose.model("User", UserSchema);
