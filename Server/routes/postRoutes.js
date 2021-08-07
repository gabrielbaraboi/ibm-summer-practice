const express = require("express");
const router = express.Router();
const controller = require("../controllers/post");
const auth = require("../middleware/auth");
const Ownership = require("../middleware/checkOwnership");

router.post("/createPost", auth, controller.createPost);
router.get("/getPosts", controller.getAllPosts);
router.get("/post/:id", controller.getSpecificPost);
router.get("/getWorkPlaces", controller.getWorkPlaces);
router.put("/post/:id", auth, Ownership, controller.updatePost);
router.delete("/post/:id", auth, Ownership, controller.deletePost);
module.exports = router;
