const Post = require("../models/post");

const checkOwnership = async (req, res, next) => {
	try {
		const post = await Post.findById(req.params.id);
		if (!post) res.status(400).json({ message: "The post wasn't found" });
		if (post.createdBy == req.user._id) next();
		else
			res.status(401).json({
				message: `Posts can be modified / deleted only by their creators!`,
			});
	} catch (error) {
		res.status(400).json({ message: "You don`t have permission!" });
	}
};
module.exports = checkOwnership;
