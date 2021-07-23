const mongoose = require("mongoose");

var conversationSchema = new mongoose.Schema({
    member1: {type:String, required:true},
    member2: {type:String, required:true},
    createdAt: {
        type:Date,
        default: Date.now
    },
});

module.exports = mongoose.model("Conversation", conversationSchema);