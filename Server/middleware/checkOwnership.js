const Student = require("../models/user");
const Comapny = require("../models/company");
const Post = require("../models/post");
const Comments = require("../models/comment");

const checkOwnership = async (req, res, next) => {
	try {
		const post = await Post.findById(req.params.id);
		if (!post) res.status(400).json({ message: "The post wasn't found" });
		if (post.createdBy.id == req.user._id) next();
		else
			res
				.status(401)
				.json({ message: "Posts can be deleted only by their creators!" });
	} catch (error) {
		res.status(400).json({ message: "You don`t have permission!" });
	}
};
module.exports = checkOwnership;
