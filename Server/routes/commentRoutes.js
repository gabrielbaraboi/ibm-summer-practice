const express = require("express");
const router = express.Router();
const controller = require("../controllers/comment");
const auth = require("../middleware/auth");
const OwnerShip = require("../middleware/checkOwnership");

router.post("/:id", auth, controller.createComment);
router.get("/:id", controller.getAllComments);
router.put("/:id/:commentId", auth, controller.updateComment);
router.delete("/:commentId", auth, controller.deleteComment);

module.exports = router;
