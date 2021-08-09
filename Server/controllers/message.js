const User = require("../models/user");
const Message = require("../models/message");
const Conversation = require("../models/conversation");
const Company = require("../models/company");
const conversation = require("../models/conversation");

const createConversation = async (req, res) => {
    const member1 = req.user._id;
    const member2 = req.body.id;
    try {
        let user = await User.findById(member2);
        if (!user) {
            user = await Company.findById(member2);
        }

        if (user) {
            if (member1 != member2) {
                const X = await Conversation.find({
                    member1: member1,
                    member2: member2,
                });
                const Y = await Conversation.find({
                    member1: member2,
                    member2: member1,
                });
                if (X.length == 0 && Y.length == 0) {
                    await Conversation.create({
                        member1: req.user._id,
                        member2: req.body.id,
                    });

                    res.status(200).json({ message: "Conversation created!" });
                } else {
                    res.status(400).json({
                        message: "Conversation already exists!",
                    });
                }
            } else {
                res.status(400).json({
                    message: "You can`t create conversation with yourself!",
                });
            }
        } else {
            res.status(400).json({ message: "Invalid ID!" });
        }
    } catch (err) {
        res.status(400).json({ message: "Can`t create conversation!" });
    }
};

const sendMessage = async (req, res) => {
    try {
        const content = req.body.content;
        if (checkEmptyMessage(content)) {
            if (await checkMembership(req.user._id, req.params.id)) {
                await Message.create({
                    content: req.body.content,
                    senderID: req.user._id,
                    conversationID: req.params.id,
                });

                res.status(200).json({ message: "Message sent succesfully" });
            } else {
                res.status(403).json({
                    message:
                        "Conversation doesn't exist or you're not a member",
                });
            }
        } else {
            res.status(400).json({ message: "Can't send empty messages!" });
        }
    } catch (error) {
        res.status(400).json({ message: "Can`t send message!" });
    }
};

const getAllConversations = async (req, res) => {
    try {
        const conversations = await Conversation.find({
            $or: [{ member1: req.user._id }, { member2: req.user._id }],
        })
            .populate("member1", "firstName lastName companyName role email")
            .populate("member2", "firstName lastName companyName role email")
            .exec();

        res.status(200).json({ conversations });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Can't get conversations" });
    }
};

const getMessages = async (req, res) => {
    if (await checkMembership(req.user._id, req.params.id)) {
        try {
            const messages = await Message.find({
                conversationID: req.params.id,
            }).populate("senderID", "firstName lastName companyName role email");
            res.status(200).json(messages);
        } catch (err) {
            res.status(400).json({ message: "Can`t retrive messages!" });
        }
    } else {
        res.status(403).json({
            message:
                "You don't hve the permission to see the messages for this conversation!",
        });
    }
};
const editMessage = async (req, res) => {
    const ownership = await checkMessageOwnership(req.user._id, req.params.id);
    if (ownership === 1) {
        await Message.findByIdAndUpdate(
            req.params.id,
            { content: req.body.content },
            (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ message: "Edit failed!" });
                } else {
                    res.status(200).json({ message: "Message edited!" });
                }
            }
        );
    } else if (ownership === 0) {
        res.status(403).json({ message: "You're not allowed to update this!" });
    } else {
        res.status(403).json({
            message: "Invalid ID or message doesn`t exist!",
        });
    }
};

const deleteMessage = async (req, res) => {
    const ownership = await checkMessageOwnership(req.user._id, req.params.id);
    if (ownership === 1) {
        await Message.findByIdAndDelete(req.params.id, (err) => {
            if (err) {
                console.log(err);
                res.status(400).json({ message: "Message deletion failed!" });
            } else {
                res.status(200).json({ message: "Message deleted!" });
            }
        });
    } else if (ownership === 0) {
        res.status(403).json({
            message: "You don`t have the permission to delete!",
        });
    } else {
        res.status(403).json({
            message: "Invalid ID or message doesn`t exist!",
        });
    }
};

async function checkMembership(userID, conversationID) {
    try {
        const conversation = await Conversation.findById(conversationID).exec();
        if (conversation) {
            if (
                conversation.member1 == userID ||
                conversation.member2 == userID
            ) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

async function checkMessageOwnership(userID, messageID) {
    try {
        const message = await Message.findById(messageID).exec();

        if (message.senderID == userID) {
            return 1;
        } else {
            return 0;
        }
    } catch (err) {
        return 2;
    }
}

function checkEmptyMessage(content) {
    if (!content) {
        return false;
    }
    for (let i of content) {
        if (i != " ") {
            return true;
        }
    }
    return false;
}

module.exports = {
    createConversation,
    sendMessage,
    getAllConversations,
    getMessages,
    editMessage,
    deleteMessage,
};
