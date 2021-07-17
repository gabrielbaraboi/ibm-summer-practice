const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
	email: String,
	password: String,
	role: String,
	firstName: String,
	lastName: String,
	companyName: String,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
