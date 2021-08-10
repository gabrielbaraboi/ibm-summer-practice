const Key = require("../models/key");

const verifySecurityKey = async (req,res,next) => {
    try {
        const key = await Key.findOne({OwnerID: req.user._id});
        if(key.content === req.body.key) next();
        else
        {
            res.status(400).json({
                message: "Security key was incorrect"
            })
        }
    } catch (e) {
        console.log(e)
        res.status(400).json(e.message);
    }
}
module.exports = verifySecurityKey;