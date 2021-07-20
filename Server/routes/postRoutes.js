const express = require("express");
const router = express.Router();
const controller = require("../controllers/post");
const auth = require("../middleware/auth");

//REGISTER
router.get("/posts", controller.getAllPosts);
router.get('/posts/:id',controller.getSpecificPost);

router.post("/posts", auth,controller.createPost);

module.exports = router;
