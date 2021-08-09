const router = require("express").Router();
const controller = require("../controllers/message");
const auth = require("../middleware/auth");

router.post("/", auth, controller.createConversation);

router.post("/:id", auth, controller.sendMessage);
router.get("/", auth, controller.getAllConversations);
router.get("/:id", auth, controller.getMessages);
router.put("/:id", auth, controller.editMessage);
router.delete("/:id", auth, controller.deleteMessage);

module.exports = router;
