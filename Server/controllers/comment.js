const User = require("../models/user");
const Post = require("../models/post");
const Comment = require("../models/comment");
const mongoose = require("mongoose");
const commentsPerPage = 3;
const createComment = async (req, res) => {
	const postId = req.params.id;
	try {
		const postExist = await Post.findById(postId);

		if (!postExist) {
			res.status(400).json({ message: "Post doesn`t exist!" });
		} else {
			let user = await User.findById(req.user._id).exec();
			if (user) {
				const newComment = {
					comment: req.body.comment,
					createdBy: mongoose.Types.ObjectId(user._id),
					parentPostId: postId,
				};

				Comment.create(newComment, (err, comment) => {
					if (err) {
						console.log(err);
						res.status(400).json({ message: "Can`t create comment" });
					} else {
						res.status(200).json({ message: "Comment created successfully" });
					}
				});
			} else {
				res.status(400).json({ message: "User not found" });
			}
		}
	} catch (err) {
		res.status(400).json({ message: "Invalid post id!" });
	}
};
const getAllComments = async (req, res) => {
	const postId = req.params.id;
	const page = parseInt(req.query.page);
	const startIndex = (page - 1) * commentsPerPage;
	const endIndex = page * commentsPerPage;
	const result = {};
	result.commentsPerPage = commentsPerPage;

	try {
		result.comments = await Comment.find({ parentPostId: postId })
			.sort({
				dUpdatedDate: -1,
			})
			.populate("createdBy", "firstName lastName companyName")
			.skip(startIndex)
			.limit(commentsPerPage);

		if (result.comments.length === 0) {
			res.status(404).json({ message: "This post has no comments yet" });
		} else {
			const count = await Comment.countDocuments({
				parentPostId: postId,
			});
			if (startIndex > 0) result.previous = page - 1;
			if (endIndex < count) result.next = page + 1;
			result.total = Math.ceil(count / commentsPerPage);
			result.count = count;
			res.status(200).json(result);
		}
	} catch (err) {
		res.status(400).json({ message: "Can`t get comments!" });
		console.log(err);
	}
};

const updateComment = async (req, res) => {
	try {
		const comment = await Comment.findById(req.params.commentId).exec();
		const authorization = await checkPermissions(
			req.user._id,
			comment,
			"update"
		);
		const postExist = await Post.findById(req.params.id);
		if (postExist) {
			if (authorization === 1) {
				const comment = await Comment.findById(req.params.commentId);
				comment.comment = req.body.comment;
				await comment.save();
				res.status(200).json({ message: "Comment updated!" });
			} else if (authorization === 3) {
				res.status(400).json({ message: "Comment dosen`t exist!" });
			} else {
				res.status(400).json({ message: "You dont`t have permissions!" });
			}
		} else {
			res.status(400).json({ message: "Post dosen`t exist!" });
		}
	} catch (err) {
		res.status(400).json({
			message: "Can`t update comment! Post or comment id is invalid!",
		});
	}
};

const deleteComment = async (req, res) => {
	try {
		const comment = await Comment.findById(req.params.commentId).exec();
		const authorization = await checkPermissions(
			req.user._id,
			comment,
			"delete"
		);

		if (authorization === 1) {
			try {
				await Comment.findByIdAndDelete(req.params.commentId);
				res.status(200).json({ message: "Comment deleted!" });
			} catch (err) {
				console.log(err);
			}
		} else if (authorization === 3) {
			res.status(400).json({ message: "Comment dosen`t exist!" });
		} else {
			res.status(400).json({ message: "You dont`t have permissions!" });
		}
	} catch (err) {
		res.status(400).json({ message: "Invalid id!" });
	}
};

async function checkPermissions(userId, comment, type) {
	if (!comment) return 3;
	if (userId == comment.createdBy.id) {
		return 1;
	}
	if (type === "delete") {
		const post = await Post.findById(comment.parentPostId).exec();
		if (userId == post.createdBy.id) {
			return 1;
		}
	}
	return 0;
}
module.exports = {
	createComment,
	getAllComments,
	updateComment,
	deleteComment,
};
