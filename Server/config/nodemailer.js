const nodemailer = require("nodemailer");
const User = require("../models/user");
const Key = require("../models/key");
require('dotenv').config();

let transporter = nodemailer.createTransport({
	service:'gmail',
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASS
	}
})
function setOptions (email,key){
	console.log(key);
	return {
		from: process.env.EMAIL,
		to: email,
		subject: 'Security check',
		text:'the security key you requested is: '+key
	}
}
// async function SendSecurityKey(email,key,cb) {
//     transporter.sendMail(setOptions(email,key),cb);
// }
module.exports = {transporter,setOptions};