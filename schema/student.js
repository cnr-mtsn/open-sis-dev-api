const mongoose = require("mongoose");
const { Schema } = mongoose;

const student = new Schema({
	student_id: Number,
	first_name: String,
	middle_name: String,
	last_name: String,
	name_suffix: String,
	gender: String,
	ethnicity_id: Number,
	common_name: String,
	social_security: String,
	birthdate: String,
	language_id: String,
	estimated_grad_date: String,
	alt_id: String,
	email: String,
	phone: String,
	is_disable: String,
	last_updated: Date,
	updated_by: String,
});

const Student = mongoose.model("student", student);

module.exports = Student;
