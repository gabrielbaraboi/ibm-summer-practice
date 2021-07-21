const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
	const token = req.headers["auth-token"];
	if (!token) {
		return res.status(401).send("Access Denied");
	}
	try {
		const decoded = jwt.verify(token, config.TOKEN_KEY);
		req.user = decoded;
		next();
	} catch (err) {
		res.status(400).send("Invalid token");
	}
};

module.exports = verifyToken;
