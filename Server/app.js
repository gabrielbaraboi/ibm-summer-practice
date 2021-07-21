require("dotenv").config();
require("./config/database.js").connect();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require('cookie-parser');


const auth = require("./middleware/auth");
//models

const Comment = require("./models/comment");
const Company = require("./models/company.js");

//Routes require
const userRoutes = require("./routes/user");

//config bodyParser & express
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());

//routes use
app.use('/user', userRoutes);

module.exports = app;
