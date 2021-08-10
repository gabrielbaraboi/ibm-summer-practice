const mongoose = require("mongoose");
const User = require("./user");

var PostSchema = new mongoose.Schema(
	{
		type: { type: String, required: true, enum: [`offer`, "request"] },
		description: { type: String, required: true },
		createdBy: {
			type: mongoose.Schema.Types.ObjectID,
			ref: User,
		},
		title: { type: String, required: true },
		programmingLanguage: { type: String, required: true },
		workHours: { type: String, required: true },
		workPlace: { type: String, required: true },
		requirements: [],
	},
	{
		timestamps: {
			createdAt: "dCreatedDate",
			updatedAt: "dUpdatedDate",
		},
	}
);

module.exports = mongoose.model("Post", PostSchema);
