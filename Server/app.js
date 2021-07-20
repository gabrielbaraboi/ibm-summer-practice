require("dotenv").config();
require("./config/database.js").connect();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const auth = require("./middleware/auth");
//models

const Comment = require("./models/comment");
const Company = require("./models/company.js");

//Routes require
const authenticantion = require("./routes/user");

//config bodyParser & express
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(express.json());

//routes use
app.use(authenticantion);
module.exports = app;
