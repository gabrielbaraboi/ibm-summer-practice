const User = require("../models/user");
const Company = require("../models/company");
const Post = require("../models/post");
const QueryBuilder =  require('../utils/QueryBuilder');
const postsPerPage=2;

const getAllPosts = async (req, res) => {
	const filterParams = req.query;
	const page = parseInt(req.query.page);
	const startIndex = (page -1) *postsPerPage;
	const endIndex = page * postsPerPage;
	const result = {};	

	try {
		result.posts = await Post.find(QueryBuilder.getQuery(filterParams))
		.skip(startIndex)
		.limit( postsPerPage);

		if(result.posts.length === 0)
			res.status(200).json({message: "no post found matching your filter"});
		else
			{
				if(startIndex > 0)
					result.previous=page-1;
				if(endIndex < await Post.countDocuments())
					result.next = page+1;
				res.status(200).json(result);	
			}
		
	}catch (error) {
		console.log(error);
		res.status(500).json(error.message);
	}
}

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
	let type;
	let user;
	user = await User.findById(req.user._id);
	if (user) {
		//Student
		createdBy = {
			id: user._id,
			name: user.firstName + " " + user.lastName,
		};
		type = "request";
	} else {
		//Company
		user = await Company.findById(req.user._id);
		if(user)
		{
			createdBy = {
				id: user._id,
				name: user.comapnyName,
			};
			type = "offer";
		} else {
			//account id wasn't found in neither Student nor Company Collection
			res.status(400).json({ message: "account id wasn't found" });
		}
	}
	const newPost = {
		type: type,
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
