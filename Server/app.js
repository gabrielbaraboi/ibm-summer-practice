require("dotenv").config();
require("./config/database.js").connect();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const auth = require("./middleware/auth");
const User = require("./models/user");
const Post = require("./models/post");
const Comment = require("./models/comment");
const Company = require("./models/company.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use(express.json());

module.exports = app;

//REGISTER
app.get("/registerUser", (req, res) => {
	res.render("registerForm.ejs");
});

app.post("/register", async (req, res) => {
    try {

		if(req.body.role === "Student")
		{
			console.log
        //Get user Inputs
			const { email, firstName, lastName, password, role } = req.body;
			// Validate data

			if (!(email && firstName && lastName && password && role)) {
				res.status(400).send("All inputs are required");
			}

			// Check if user exist
			const oldUser = await User.findOne({ email });
			const oldCompany = await Company.findOne({email});

			if (oldUser || oldCompany) {
				return res.status(409).send("email is already used for an account");
			}

			// encrypt password
			encryptedPassword = await bcrypt.hash(password, 10);

			//reate user to db

			const user = await User.create({
				email: email.toLowerCase(),
				firstName,
				lastName,
				password: encryptedPassword,
				role,
			});

			// Create token
			const token = jwt.sign(
				{ user_id: user._id, email },
				process.env.TOKEN_KEY,
				{
					expiresIn: "2h",
				}
			);
			user.token = token;
			return res.send("User created!");
		}
		else if(req.body.role === 'Company')
		{
			const {email,password,companyName,role} = req.body;

			if(!(email && companyName && password && role))
			{
				res.status(400).send("All inputs are required");
			}

			const oldUser = await User.findOne({ email });
			const oldCompany = await Company.findOne({email});

			if (oldUser || oldCompany) {
				return res.status(409).send("email is already used for an account");
			}
			encryptedPassword = await bcrypt.hash(password,10)

			const company = await Company.create({
				email: email.toLowerCase(),
				password: encryptedPassword,
				companyName,
				role,
			})
			const token = jwt.sign(
				{ comapny_id: company._id, email },
				process.env.TOKEN_KEY,
				{
					expiresIn: "2h",
				}
			);
			company.token = token;
			return res.send("Company account created!");
		}
    } catch (err) {
        console.log(err);

    }
});

//LOGIN

app.get("/loginUser", (req, res) => {
    res.render("loginForm.ejs");
});

app.post("/login", async (req, res) => {
    try {
        //Get user data
        const { email, password } = req.body;
        //Validate data
        if (!(email && password)) {
            res.status(400).send("All inputs are required");
        }
        //Verify if user exist
        const user = await User.findOne({ email });
		const company = await Company.findOne({email});

		
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
            // save token
            user.token = token;
            //user
            res.status(200).json(user);
        }
		else if(company && (await bcrypt.compare(password,company.password)))
		{
			const token = jwt.sign(
				{company_id: company._id,email},
				process.env.TOKEN_KEY,
				{
					expiresIn: "2h",
				}
			);
			company.token = token;
			res.status(200).json(company);
		}
		else
			{
				res.status(400).send("Invalid email or password");
			}
    } catch (err) {
        console.log(err);
    }
});
app.post("/welcome", auth, (req, res) => {
	res.status(200).send("Welcome 🙌 ");
});
