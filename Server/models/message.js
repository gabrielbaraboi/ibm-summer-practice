const mongoose = require("mongoose");
const User = require("./user");
const Conversation = require("./conversation");

var messageSchema = new mongoose.Schema(
	{
		content: { type: String, required: true },
		senderID: {
			type: mongoose.Schema.Types.ObjectID,
			ref: User,
		},
		conversationID: {
			type: mongoose.Schema.Types.ObjectID,
			ref: Conversation,
		},
	},
	{
		timestamps: {
			createdAt: "dCreatedDate",
			updatedAt: "dUpdatedDate",
		},
	}
);

module.exports = mongoose.model("Message", messageSchema);
