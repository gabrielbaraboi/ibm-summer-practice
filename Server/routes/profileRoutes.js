const express = require("express");
const router = express.Router();
const controller = require("../controllers/profile");

router.get("/getProfilePic/:id", controller.getUserProfilePic);

module.exports = router;
