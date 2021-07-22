const Student = require("../models/user");
const Comapny = require("../models/company");
const Post = require("../models/post");
const Comments = require("../models/comment");

const checkOwnership = async (req, res, next) => {
	try {
		const post = await Post.findById(req.params.id);
		if (!post) res.status(400).send("the post wasn't found");
		if (post.createdBy.id == req.user._id) next();
		else res.status(401).send("posts can be deleted only by their creators");
	} catch (error) {
		console.log(error);
	}
};
module.exports = checkOwnership;
