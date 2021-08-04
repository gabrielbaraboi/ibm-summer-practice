const express = require("express");
const router = express.Router();
const controller = require("../controllers/profile");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const auth = require("../middleware/auth");

router.get("/:id", controller.getUserDetails);
router.get("/:id/getProfilePic", controller.getUserProfilePic);
router.post("/setProfilePic",upload.single("profile-picture"), auth, controller.setProfilePic);
router.put("/modifySocialMedia", auth, controller.modifySocialMedia);
router.put("/modifyAboutMe", auth, controller.modifyAboutMe);
module.exports = router;
