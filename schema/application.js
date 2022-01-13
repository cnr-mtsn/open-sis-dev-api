import mongoose from "mongoose";
const { Schema } = mongoose;

const application = new Schema({
	Acellus_ID: String,
	GoldKeyID: String,
	first_name: String,
	middle_name: String,
	last_name: String,
	email: String,
	phone: String,
	street_address_1: String,
	street_address_2: String,
	city: String,
	state: String,
	zipcode: String,
	country: String,
	main_citizenship: String,
	dual_citizenship: String,
	isVisaHolder: Number,
	birthdate: String,
	programID: Number,
	ethnicity_id: Number,
	socialMedia: String,
	nativeLang: String,
	student_picture: String,
	yearsSinceSchool: Number,
	ged: Number,
	resume: String,
	interests: String,
	awardDesc: String,
	careerGoals: String,
	applyReason: String,
	schoolMisconductExplanation: String,
	felonyExplanation: String,
	additional_info: String,
	stepNum: Number,
	signature: String,
	communtiyService: String,
});

const Application = mongoose.model("application", application);
export default Application;
