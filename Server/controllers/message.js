const User = require("../models/user");
const Message = require("../models/message");
const Conversation = require("../models/conversation");
const Company = require("../models/conversation");



const createConversation = async (req,res) =>
{
    const member1 = req.user._id;
    const member2 = req.body.id;
    try{
        const X = await Conversation.find({member1 : member1, member2: member2});
        const Y = await Conversation.find({member1 : member2, member2 : member1});
        if(X.length == 0 && Y.length == 0)
        {
            await Conversation.create({
                member1 : req.user._id,
                member2 : req.body.id,
            })
            res.status(200).send("conversation created");
        }
        else
        {
            res.status(400).send("conversation already exists");
        }
    }
    catch(err)
    {
        console.log(err)
        res.status(400).send(err);
    }
}



const sendMessage = async (req,res) =>
{
    if(!req.body.content)
    {
        res.status(400).send("can't send empty messages");
    }
    
    try {
        if(await checkMembership(req.user._id, req.params.id))
        {
                await Message.create(
                {
                    content:req.body.content,
                    senderID: req.user._id,
                    conversationID: req.params.id,
                })
              res.status(200).json({message : "message sent succesfully"});
            }
        else
        {
            res.status(403).json({message: "Conversation doesn't exist or you're not a member"});
        }   
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
const getAllConversations = async (req,res) =>
{
    try {
        const conversations = await Conversation.find({$or : [{member1:req.user._id},{member2:req.user._id}]}).exec();
        res.status(200).json(conversations);
    } catch (error) {
        console.log(error);
        res.status(400).json({message: "Can't get conversations"});
    }
}
const getMessages = async (req,res) =>
{
    if(await checkMembership(req.user._id,req.params.id))
    {
        try {
            const messages = await Message.find({conversationID : req.params.id})
            res.status(200).json(messages);
        }
        catch(err)
        {
            res.status(400).json(err);
        }
    }
    else
    {
        res.status(403).json({message: "you don't hve the permission to see the messages for this conversation"});
    }
}
const editMessage = async (req,res) =>
{
    if(await checkMessageOwnership(req.user._id,req.body.id))
    {
        await Message.findByIdAndUpdate(req.body.id,{content:req.body.content}, (err,result) =>{
            if(err)
                {
                    console.log(err);
                    res.status(400).json({message: "edit failed"});
                }
                else
                {
                    res.status(200).json({message: "message edited"});
                }
        });

    }
    else 
    {
        res.status(403).json({message: "you're not allowed to update this"})
    }
}

const deleteMessage = async (req,res) => {
    if(await checkMessageOwnership(req.user._id,req.body.id))
    {
        await Message.findByIdAndDelete(req.body.id, (err) => {
            if(err)
            {
                console.log(err);
                res.status(400).json({message : "message deletion failed"});
            }
            else
            {
                res.status(200).json({message : "message deleted"});
            }
        })
    }
    else 
    {
        res.status(403).json({message: "you're not allowed to delete this"});
    }
}

async function checkMembership (userID,conversationID)
{
    try {
        const conversation = await Conversation.findById(conversationID).exec();
        if(conversation)
        {
            if(conversation.member1 == userID || conversation.member2 == userID )
                {
                    return true;
                }
            else
                {
                    return false;
                }
        }
        else
        {
            return false;
        }    

    } catch (error) {
        console.log(error);
    }
}

async function checkMessageOwnership(userID,messageID)
{
    try{
        const message = await Message.findById(messageID).exec();
        if(message.senderID == userID)
        {
            return true;
        }
        else
        {
            return false;
        }

    }
    catch(err)
    {
        console.log(err);
        res.status(400).json({message: "cannot get message"});
    }
}
module.exports = {createConversation,sendMessage,getAllConversations,getMessages,editMessage,deleteMessage};


