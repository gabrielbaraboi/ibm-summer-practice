const cos = require("../config/IBMconfig");

function uploadPic(picName, pic) {
	return cos
		.putObject({
			Bucket: "ibm-summer-practice-user-profile-pic",
			Key: picName,
			Body: pic,
		})
		.promise();
}

function deletePic(picName) {
	return cos
		.deleteObject({
			Bucket: "ibm-summer-practice-user-profile-pic",
			Key: picName,
		})
		.promise();
}

function getPic(picName) {
	return cos
		.getObject({
			Bucket: "ibm-summer-practice-user-profile-pic",
			Key: picName,
		})
		.createReadStream();
}
module.exports = { uploadPic, deletePic, getPic };
