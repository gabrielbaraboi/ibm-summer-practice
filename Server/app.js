require("dotenv").config();
require("./config/database.js").connect();

const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//Routes require
const authenticantion = require("./routes/userRoutes");
const posts = require("./routes/postRoutes");
const comments = require("./routes/commentRoutes");
const messages = require("./routes/messagesRoutes");
const profile = require("./routes/profileRoutes");

//config bodyParser & express
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);
app.use(cookieParser());

//routes use
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
	res.render("register");
});
app.get("/login", (req, res) => {
	res.render("login");
});

app.use("/auth", authenticantion, function (req, res, next) {
	res.header(
		"Access-Control-Allow-Headers",
		"x-access-token, Origin, Content-Type, Accept"
	);
	next();
});
app.use("/posts", posts);
app.use(comments);
app.use(messages);
app.use("/profile", profile);
// app.use('/user', userRoutes);

module.exports = app;
