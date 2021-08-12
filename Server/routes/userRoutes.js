const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const auth = require("../middleware/auth");
const verifyKey = require("../middleware/verifyKey");

//REGISTER
router.post(
	"/register",
	upload.single("profile-picture"),
	controller.registerUser
);

//LOGIN
router.post("/login", controller.loginUser);

//GetAllUsers
router.get("/getAllUsers", controller.getAllUsers);
router.get("/getAllPosts/:id", controller.getAllUserPosts);

router.get("/generateKey", auth, controller.generateSecurityKey);
router.post("/testMiddleware", auth, verifyKey, controller.Test);
router.post("/changePassword", auth, verifyKey, controller.changePassword);
router.post("/deleteAccount", auth, verifyKey, controller.deleteAccount);
module.exports = router;
