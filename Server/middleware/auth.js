const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
	const token =
		req.body.token ||
		req.query.token ||
		req.headers["auth-token"] ||
		req.cookies.token;
	if (!token) {
		return res.status(403).json({ message: "Token is required for login" });
	}
	try {
		const decoded = jwt.verify(token, config.TOKEN_KEY);
		req.user = decoded;
		next();
	} catch (err) {
		console.log(err);
		res.status(400).json({ message: "Token is not valid" });
	}
};

module.exports = verifyToken;
