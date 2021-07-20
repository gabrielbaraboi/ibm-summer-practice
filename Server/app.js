require("dotenv").config();
require("./config/database.js").connect();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const auth = require("./middleware/auth");
//Routes require
const authenticantion = require("./routes/userRoutes");
const posts = require("./routes/postRoutes");
//config bodyParser & express
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(express.json());

//routes use
app.use(authenticantion);
app.use(posts);
module.exports = app;
