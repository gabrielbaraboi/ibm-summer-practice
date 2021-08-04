const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

//REGISTER
router.post("/register", upload.single("profile-picture"), controller.registerUser);

//LOGIN
router.post("/login", controller.loginUser);

module.exports = router;
