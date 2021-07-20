const User = require("../models/user");
const Company = require("../models/company");
const Post = require("../models/post");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const getAllPosts = async (req,res) => {
     await Post.find({}, (err,allPost) =>{
        if(err)
            {
                console.log(err);
                res.status(400).send(err);
            }
        else
        {
            res.status(200).send(allPost);
        }
    });
}

const getSpecificPost = async (req,res) => {
    await Post.findById(req.params.id, (err, Post) => {
        if(err)
        {
            console.log(err);
            res.status(400).send(err);
        }
        else
        {
            if(Post)
                res.status(200).send(Post);
            else
                res.status(400).send("no post with that id was found");
        }
    });
}

const createPost = async (req,res) => {

    
   const createdBy = {
       id:req.body.createdBy.id,
       firstName:req.body.createdBy.firstName,
       lastName:req.body.createdBy.lastName
   }
   const newPost = {
       type: req.body.type,
       description: req.body.description,
       createdBy: createdBy,
       title: req.body.title,
       programmingLanguage: req.body.programmingLanguage,
       workHours: req.body.workHours,
       workPlace: req.body.workPlace,
       requirements: req.body.requirements
   }
   console.log(newPost);


   Post.create(newPost, (err,Post) => {
    if(err)
    {
        console.log(err);
        res.status(400).send(err);
    }
    else
        res.status(200).send("Post created Succesfully");
   });
};
module.exports = {getAllPosts,getSpecificPost,createPost};