const mongoose = require("mongoose");

var messageSchema = new mongoose.Schema({
    content: { type: String, required: true },
    senderID: { type: String, required: true },
    conversationID: { type: String, required: true },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("Message", messageSchema);