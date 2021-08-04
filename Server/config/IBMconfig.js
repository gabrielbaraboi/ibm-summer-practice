const ibm = require("ibm-cos-sdk");

const config = {
	endpoint: "s3.eu-de.cloud-object-storage.appdomain.cloud",
	apiKeyId: "A52olpQZcy8nTNja8fcJW6g20C83FBRZn1tf6S-3wPjY",
	serviceInstanceId:
		"crn:v1:bluemix:public:cloud-object-storage:global:a/303b32301c49498d950c66044a87cf53:db3e7750-3f62-4f3d-b143-9178207fd2dd::",
};

const cos = new ibm.S3(config);

module.exports = cos;
