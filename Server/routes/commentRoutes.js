const express = require("express");
const router = express.Router();
const controller = require("../controllers/comment");
const auth = require("../middleware/auth");
const OwnerShip = require("../middleware/checkOwnership");

router.post("/posts/:id/comments", auth, controller.createComment);
router.get("/posts/:id/comments", controller.sendAllComments);
router.put("/posts/:id/comments/:commentId", auth, controller.updateComment);
router.delete("/:commentId", auth, controller.deleteComment);

module.exports = router;
