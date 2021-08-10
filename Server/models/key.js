const mongoose = require("mongoose");
const User  = require("./user");

var keySchema = new mongoose.Schema(
    {
        content: {type: String, required: true},
        OwnerID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: User
        }
    }
)
module.exports = mongoose.model("Key",keySchema);