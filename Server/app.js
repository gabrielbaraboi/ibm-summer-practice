const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");

var User = require("./models/user");
var Post = require("./models/post");
var Comment = require("./models/comment");

mongoose.connect(
	"mongodb+srv://gege:parola@cluster0.kccyy.mongodb.net/IBMSummerPractice?retryWrites=true&w=majority",
	{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
	// (err, client) => {
	// 	if (err) return console.error(err);
	// 	console.log("Connected");
	// }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Passport config
app.use(
	require("express-session")({
		secret: "IBM summer Practice",
		resave: false,
		saveUninitialized: false,
	})
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", (req, res) => {
	res.render("index.ejs");
});

app.get("/register", (req, res) => {
	res.render("registerForm.ejs");
});

app.post("/register", function (req, res) {
	var newUser = new User({
		email: req.body.email,
		password: req.body.password,
		role: req.body.role,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		companyName: req.body.companyName,
	});

	newUser
		.save()
		.then((result) => {
			console.log(result);
		})
		.catch((err) => console.log(err));
});

app.listen(3000, (req, res) => {
	console.log("Server has Started");
});
