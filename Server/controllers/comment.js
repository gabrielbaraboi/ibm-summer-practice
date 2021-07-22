const User = require("../models/user");
const Company = require("../models/company");
const Post = require("../models/post");
const Comment = require("../models/comment");

const createComment = async (req, res) => {
	let name;
	const postId = req.params.id;

	let user = await User.findById(req.user._id).exec();
	if (!user) {
		user = await Company.findById(req.user._id).exec();
	}

	if (user.role === "student") {
		name = user.firstName + " " + user.lastName;
	} else if (user.role === "company") {
		name = user.companyName;
	}

	const createdBy = {
		id: user.id,
		name: name,
	};

	const newComment = {
		comment: req.body.comment,
		createdBy: createdBy,
		parentPostId: postId,
	};

	Comment.create(newComment, (err, comment) => {
		if (err) {
			console.log(err);
			res.status(400).send(err);
		} else {
			res.status(200).send("Comment created successfully");
		}
	});
};
const sendAllComments = async (req, res) => {
	const postId = req.params.id;

	const comments = await Comment.find(
		{ parentPostId: postId },
		(err, comment) => {
			if (err) {
				res.status(400).json({ message: "Can`t get comments!" });
			} else {
				res.json(comment.reverse());
			}
		}
	);
};

const updateComment = async (req, res) => {
	const comment = await Comment.findById(req.params.commentId).exec();
	const authorization = await checkPermissions(req.user._id, comment);
	try {
		if (authorization === true) {
			await Comment.findByIdAndUpdate(
				req.params.commentId,
				req.body,
				(err, updatedComment) => {
					if (err) {
						res.status(400).send(err);
					}
					res.status(200).send("Comment updated successfully");
				}
			);
		} else if (authorization === 3) {
			res.status(400).send("Comment dosen`t exist!");
		} else {
			res.status(400).send("You dont`t have permissions!");
		}
	} catch (err) {
		res.status(400).send(err);
	}
};

const deleteComment = async (req, res) => {
	const comment = await Comment.findById(req.params.commentId).exec();
	const authorization = await checkPermissions(req.user._id, comment);

	if (authorization === true) {
		try {
			await Comment.findByIdAndDelete(req.params.commentId);
			res.status(200).send("Comment deleted!");
		} catch (err) {
			console.log(err);
		}
	} else if (authorization === 3) {
		res.status(400).send("Comment dosen`t exist!");
	} else {
		res.status(400).send("You dont`t have permissions!");
	}
};

async function checkPermissions(userId, comment) {
	if (!comment) return 3;
	const post = await Post.findById(comment.parentPostId).exec();
	if (userId == post.createdBy.id || userId == comment.createdBy.id) {
		return true;
	}
	return false;
}
module.exports = {
	createComment,
	sendAllComments,
	updateComment,
	deleteComment,
};
