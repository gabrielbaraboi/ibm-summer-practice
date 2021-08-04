const express = require("express");
const router = express.Router();
const controller = require("../controllers/profile");

router.get("/:id", controller.getUserDetails);
router.get("/:id/getProfilePic", controller.getUserProfilePic);

module.exports = router;
