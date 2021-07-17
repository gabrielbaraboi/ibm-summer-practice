const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
	res.render("index.ejs");
});

app.listen(3000, (req, res) => {
	console.log("Server has Started");
});
