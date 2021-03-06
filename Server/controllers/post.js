const User = require("../models/user");
const mongoose = require("mongoose");
const Post = require("../models/post");
const Comment = require("../models/comment");
const QueryBuilder = require("../utils/QueryBuilder");
const postsPerPage = 3;

const getAllPosts = async (req, res) => {
    const filterParams = req.query;
    const page = parseInt(req.query.page);
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = page * postsPerPage;
    const result = {};

    try {
        result.posts = await Post.find(QueryBuilder.getQuery(filterParams))
            .sort({ dUpdatedDate: -1 })
            .populate("createdBy", "firstName lastName companyName")
            .skip(startIndex)
            .limit(postsPerPage);
        if (result.posts.length === 0)
            res.status(404).json({
                message: "No post found matching your filter",
            });
        else {
            const count = await Post.countDocuments(
                QueryBuilder.getQuery(filterParams)
            );
            if (startIndex > 0) result.previous = page - 1;
            if (endIndex < count) result.next = page + 1;
            result.total = Math.ceil(count / postsPerPage);
            res.status(200).json(result);
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const getSpecificPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate(
            "createdBy",
            "firstName lastName companyName"
        );
        if (post) res.status(200).json(post);
        else
            res.status(400).json({
                messages: "No post with that id was found!",
            });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

const createPost = async (req, res) => {
    let createdBy;
    let type;
    let user;
    user = await User.findById(req.user._id);
    if (user) {
        //Student
        if (user.role === "Student") {
            type = "request";
        } else {
            type = "offer";
        }
        const newPost = {
            type: type,
            description: req.body.description,
            createdBy: mongoose.Types.ObjectId(user._id),
            title: req.body.title,
            programmingLanguage: req.body.programmingLanguage,
            workHours: req.body.workHours,
            workPlace: req.body.workPlace,
            requirements: req.body.requirements,
        };
        Post.create(newPost, (err, Post) => {
            if (err) {
                res.status(400).json({ message: "Can`t create post!" });
            } else
                res.status(200).json({ message: "Post created Succesfully" });
        });
    } else {
        //account id wasn't found in neither Student nor Company Collection
        res.status(400).json({ message: "account id wasn't found" });
    }
};

const updatePost = async (req, res) => {
    const post = await Post.findById(req.params.id).exec();
    if (req.body.type == post.type) {
        await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            (err, updatedPost) => {
                if (err)
                    res.status(400).json({ message: "Failed to update post!" });
                res.status(200).json(updatedPost);
            }
        );
    } else {
        res.status(400).json({ message: "Post type can't be modified!" });
    }
};

const deletePost = async (req, res) => {
    try {
        await Comment.deleteMany({ parentPostId: req.params.id });
        await Post.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: "Post deleted successfully!" });
    } catch (error) {
        res.status(400).json({ message: "Failed to delete this post!" });
    }
};

const getWorkPlaces = async (req, res) => {
    try {
        const workPlaces = await Post.find({}, "workPlace");
        return res.status(200).json({ workPlaces });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllPosts,
    getSpecificPost,
    createPost,
    deletePost,
    updatePost,
    getWorkPlaces,
};
