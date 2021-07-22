const mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({
	comment: String,
	createdBy: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
		},
		name: String,
	},
	parentPostId: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Comment", commentSchema);
