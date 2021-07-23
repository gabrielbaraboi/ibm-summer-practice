const router = require("express").Router();
const controller = require("../controllers/message");
const auth = require("../middleware/auth");


router.post("/inbox",auth,controller.createConversation);

router.post("/inbox/:id",auth,controller.sendMessage);
router.get("/inbox",auth,controller.getAllConversations);
router.get("/inbox/:id",auth,controller.getMessages);
router.put("/inbox/:id",auth,controller.editMessage);
router.delete("/inbox/:id",auth,controller.deleteMessage);

module.exports = router;