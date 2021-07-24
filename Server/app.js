require("dotenv").config();
require("./config/database.js").connect();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

//Routes require
const authenticantion = require("./routes/userRoutes");
const posts = require("./routes/postRoutes");
const comments = require("./routes/commentRoutes");
const messages = require("./routes/messagesRoutes");

//config bodyParser & express
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);
app.use(cookieParser());

//routes use
app.use(authenticantion);
app.use(posts);
app.use(comments);
app.use(messages);
// app.use('/user', userRoutes);

module.exports = app;
