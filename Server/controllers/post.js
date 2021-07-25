const User = require("../models/user");
const Company = require("../models/company");
const Post = require("../models/post");

const getAllPosts = async (req, res) => {
	const sortingParams = req.query;
	let allPosts;
	try {
		allPosts = await Post.find({});
		if (sortingParams.type) {
			allPosts = allPosts.filter((el) => el.type == sortingParams.type);
		}
		if (sortingParams.workHours) {
			allPosts = allPosts.filter(
				(el) => el.workHours == sortingParams.workHours
			);
		}
		if (sortingParams.workPlace) {
			allPosts = allPosts.filter(
				(el) => el.workPlace == sortingParams.workPlace
			);
		}
		if (sortingParams.programmingLanguage) {
			allPosts = allPosts.filter(
				(el) => el.programmingLanguage == sortingParams.programmingLanguage
			);
		}

		if (sortingParams.requirements) {
			const arr = JSON.parse(req.query.requirements);
			arr.forEach((element) => {
				allPosts = allPosts.filter(
					(el) => el.requirements.indexOf(element) >= 0
				);
			});
		}

		if (allPosts.length != 0) {
			res.status(200).json(allPosts.reverse());
		} else res.status(400).json({ message: "No posts matching your filters" });
	} catch (err) {
		res.status(400).json({ message: "Can`t get posts" });
		console.log(err);
	}
};

const getSpecificPost = async (req, res) => {
	await Post.findById(req.params.id, (err, Post) => {
		if (err) {
			res.status(400).json({ message: "Can`t get post!" });
		} else {
			if (Post) res.status(200).json(Post);
			else
				res.status(400).json({ messages: "No post with that id was found!" });
		}
	});
};

const createPost = async (req, res) => {
	let createdBy;

	if (req.body.type == "request") {
		const user = await User.findById(req.user._id);
		if (!user)
			return res
				.status(400)
				.json({ message: "Company account can't create requests!" });
		createdBy = {
			id: user._id,
			name: user.firstName + " " + user.lastName,
		};
	} else if (req.body.type == "offer") {
		const company = await Company.findById(req.user._id);
		if (!company)
			return res
				.status(400)
				.json({ message: "Student account can't create offers!" });
		createdBy = {
			id: company._id,
			name: company.companyName,
		};
	} else {
		res
			.status(400)
			.json({ message: "Request type not valid for account type!" });
	}
	const newPost = {
		type: req.body.type,
		description: req.body.description,
		createdBy: createdBy,
		title: req.body.title,
		programmingLanguage: req.body.programmingLanguage,
		workHours: req.body.workHours,
		workPlace: req.body.workPlace,
		requirements: req.body.requirements,
	};

	Post.create(newPost, (err, Post) => {
		if (err) {
			res.status(400).json({ message: "Can`t create post!" });
		} else res.status(200).json({ message: "Post created Succesfully" });
	});
};

const updatePost = async (req, res) => {
	const post = await Post.findById(req.params.id).exec();
	if (req.body.type == post.type) {
		await Post.findByIdAndUpdate(
			req.params.id,
			req.body,
			(err, updatedPost) => {
				if (err) res.status(400).json({ message: "Failed to update post!" });
				res.status(200).json(updatedPost);
			}
		);
	} else {
		res.status(400).json({ message: "Post type can't be modified!" });
	}
};

const deletePost = async (req, res) => {
	try {
		await Post.deleteOne({ _id: req.params.id });
		res.status(200).json({ message: "Post deleted successfully!" });
	} catch (error) {
		res.status(400).json({ message: "Failed to delete this comment!" });
	}
};
module.exports = {
	getAllPosts,
	getSpecificPost,
	createPost,
	deletePost,
	updatePost,
};
