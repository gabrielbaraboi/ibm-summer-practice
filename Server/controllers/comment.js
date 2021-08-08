const User = require("../models/user");
const Company = require("../models/company");
const Post = require("../models/post");
const Comment = require("../models/comment");

const createComment = async (req, res) => {
	let name;
	const postId = req.params.id;

	try {
		const postExist = await Post.findById(postId);

		if (!postExist) {
			res.status(400).json({ message: "Post doesn`t exist!" });
		} else {
			let user = await User.findById(req.user._id).exec();
			if (!user) {
				user = await Company.findById(req.user._id).exec();
			}

			if (user.role === "Student") {
				name = user.firstName + " " + user.lastName;
			} else if (user.role === "Company") {
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
					res.status(400).json({ message: "Can`t create comment" });
				} else {
					res.status(200).json({ message: "Comment created successfully" });
				}
			});
		}
	} catch (err) {
		res.status(400).json({ message: "Invalid post id!" });
	}
};
const sendAllComments = async (req, res) => {
	const postId = req.params.id;
	const result = {}

	await Comment.find({ parentPostId: postId }, (err, comments) => {
		if (err) {
			res.status(400).json({ message: "Can`t get comments!" });
		} else {
			result.comments = comments.reverse();
			result.count = comments.length;
			res.json(result);
		}
	});
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
				await Comment.findByIdAndUpdate(
					req.params.commentId,
					req.body,
					(err, updatedComment) => {
						if (err) {
							res.status(400).json({ message: "Can`t update comment" });
						}
						res.status(200).json(updatedComment);
					}
				);
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
	sendAllComments,
	updateComment,
	deleteComment,
};
