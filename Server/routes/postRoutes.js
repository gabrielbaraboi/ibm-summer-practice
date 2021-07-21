const express = require("express");
const router = express.Router();
const controller = require("../controllers/post");
const auth = require("../middleware/auth");
const Ownership = require("../middleware/checkOwnership");

//REGISTER
router.post("/posts", auth,controller.createPost);
router.get("/posts", controller.getAllPosts);
router.get('/posts/:id',controller.getSpecificPost);
router.put('/posts/:id',auth,Ownership,controller.updatePost)
router.delete("/posts/:id",auth,Ownership,controller.deletePost);

module.exports = router;
