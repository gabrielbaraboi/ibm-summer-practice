const mongoose = require("mongoose");

var PostSchema = new mongoose.Schema({
	type: String,
	description: String,
	createdBy: {
		id: {
			type: mongoose.Schema.Types.ObjectID,
			ref: "User",
		},
		firstName: String,
		lastName: String,
	},
	title: String,
	programmingLanguage: String,
	workHours: String,
	WorkPlace: String,
	requirements: [],
});

module.exports = mongoose.model("Post", PostSchema);
