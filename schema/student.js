const mongoose = require("mongoose");
const { Schema } = mongoose;

const student = new Schema({
	studentID: Number,
	firstName: String,
	middleName: String,
	lastName: String,
	nameSuffix: String,
	gender: String,
	ethnicityID: Number,
	commonName: String,
	socialSecurity: String,
	birthdate: String,
	languageID: String,
	estimatedGradDate: String,
	altID: String,
	email: String,
	phone: String,
	isDisable: String,
	lastUpdated: Date,
	updatedBy: String,
});

const Student = mongoose.model("student", student);

module.exports = Student;
