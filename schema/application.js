const mongoose = require("mongoose");
const { Schema } = mongoose;

const application = new Schema({
	AcellusID: String,
	GoldKeyID: String,
	firstName: String,
	middleName: String,
	lastName: String,
	email: String,
	phoneNumber: String,
	streetAddress1: String,
	streetAddress2: String,
	city: String,
	state: String,
	zipcode: String,
	country: String,
	mainCitizenship: String,
	dualCitizenship: String,
	isVisaHolder: Number,
	birthdate: String,
	programID: Number,
	ethnicityID: Number,
	socialMedia: String,
	nativeLang: String,
	studentPicture: String,
	yearsSinceSchool: Number,
	ged: Number,
	resume: String,
	interests: String,
	awardDesc: String,
	careerGoals: String,
	applyReason: String,
	schoolMisconductExplanation: String,
	felonyExplanation: String,
	additionalInfo: String,
	step: Number,
	signature: String,
	communtiyService: String,
});

const Application = mongoose.model("application", application);

module.exports = Application;
