const mongoose = require("mongoose");
const User = require("./user");
var commentSchema = new mongoose.Schema(
	{
		comment: String,
		createdBy: { type: mongoose.Schema.Types.ObjectId, ref: User },
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
