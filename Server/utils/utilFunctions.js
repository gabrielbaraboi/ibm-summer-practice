const ibm = require("../controllers/IBMfunctions")
const User = require("../models/user");
const Company = require("../models/company");
const fs = require("fs")

async function uploadPic(image, imageName) {
	if (image) {
		try {
			const fileStream = fs.createReadStream(image.path);
			await ibm.uploadPic(imageName, fileStream);
		} catch (err) {
			console.log(err);
		}
	}
}

async function getUserFromID(id)
{
  try {
    let user;
    user = await User.findById(id);
    if(!user)
        user = await Company.findById(id);
    if(!user)
        {
            console.log("user id wasn't found in the database");
            return null;
        }
    return user;
  } catch (error) {
      console.log(error);
  }
}
module.exports = { uploadPic,getUserFromID };