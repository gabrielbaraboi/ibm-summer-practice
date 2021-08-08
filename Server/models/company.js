const mongoose = require("mongoose");

var CompanySchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    companyName: { type: String, required: true },
    role: { type: String, required: true, default: "Company" },
    profilePic: { type: String, default: "" },
    website: { type: String, default: "" },
    linkedin: { type: String, default: "" },
    github: { type: String, default: "" },
    twitter: { type: String, default: "" },
    facebook: { type: String, default: "" },
    about: { type: String, default: "" },
});

module.exports = mongoose.model("Company", CompanySchema);
