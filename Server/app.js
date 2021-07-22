require("dotenv").config();
require("./config/database.js").connect();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//Routes require
const authenticantion = require("./routes/userRoutes");
const posts = require("./routes/postRoutes");
const comments = require("./routes/commentRoutes");

//config bodyParser & express
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(express.json());

//routes use
app.use(authenticantion);
app.use(posts);
app.use(comments);
module.exports = app;
