const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");

//REGISTER
router.post("/register", controller.registerUser);

//LOGIN
router.post("/login", controller.loginUser);

//LOGOUT
router.get("/logout", controller.logout);

module.exports = router;
