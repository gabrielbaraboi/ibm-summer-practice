const mongoose = require("mongoose");

var commentSchema = new mongoose.Schema(
	{
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
	},
	{
		timestamps: {
			createdAt: "dCreatedDate",
			updatedAt: "dUpdatedDate",
		},
	}
);

module.exports = mongoose.model("Comment", commentSchema);
