const mongoose = require("mongoose");
const User = require("./user");
var conversationSchema = new mongoose.Schema(
	{
		member1: {
			type: mongoose.Schema.Types.ObjectID,
			ref: User,
		},

		member2: {
			type: mongoose.Schema.Types.ObjectID,
			ref: User,
		},
	},
	{
		timestamps: {
			createdAt: "dCreatedDate",
			updatedAt: "dUpdatedDate",
		},
	}
);

module.exports = mongoose.model("Conversation", conversationSchema);
