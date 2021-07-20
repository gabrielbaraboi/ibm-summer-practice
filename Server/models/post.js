const mongoose = require("mongoose");

var PostSchema = new mongoose.Schema({
	type: {type: String, required: true, enum:[`offer`,'request']},
	description: {type: String, required: true},
	createdBy: {
		id: {
			type: mongoose.Schema.Types.ObjectID,
			ref: "User",
		},
		firstName: String,
		lastName: String,
	},
	title: {type: String, required : true},
	programmingLanguage: {type: String, required: true},
	workHours: {type: String, required : true},
	workPlace: {type: String, required : true},
	requirements: [],
	date:{
		type:Date,
		default: Date.now
	}
});

module.exports = mongoose.model("Post", PostSchema);
