// importing the dependencies
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//imort schemas from ./schema
const Student = require("./schema/student.js");
const Application = require("./schema/application.js");

// application config
const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("[@:remote-addr] => [:method :url] => [status: :status] => [in :total-time ms]"));

mongoose.connect(process.env.MONGO_DB_URL, err => console.log(err ? "error" : "Connected! 🚀"));

/****** API ROUTES  ******/
app.get("/", (req, res) => {
	res.send("Hello, World");
});
const routes = [
	{
		name: "student",
		type: Student,
	},
	{
		name: "application",
		type: Application,
	},
];
routes.forEach(({ name, type }) => {
	app.get(`/api/${name}`, (req, res) => {
		type.find({}, (err, result) => {
			if (result.length == 0) result = { message: "No Data" };
			res.send(err ? err : result);
		});
	});
	app.post(`/api/post/${name}`, (req, res) => {
		const newItem = new type(req.body);
		console.log(newItem);
		newItem.save((err, result) => {
			res.send(
				err
					? { message: `Could not add ${name} - see logs` }
					: { message: `🚀 ${name} added! 😄`, item: newItem }
			);
		});
	});
	app.put(`/api/put/${name}/:id`, (req, res) => {
		const id = req.params.id;
		const obj = { _id: id };
		type.updateOne(obj, req.body, (err, result) => {
			res.send(err ? { message: `Could not update ${name} - see logs` } : { message: `🚀 ${name} updated! 😄` });
		});
	});
	app.delete(`/api/delete/${name}`, (req, res) => {
		type.deleteMany({}, (err, result) => {
			res.send(err ? err : result);
		});
	});
	app.delete(`/api/delete/${name}/:id`, (req, res) => {
		const id = req.params.id;
		const obj = { _id: id };
		type.deleteOne(obj, (err, result) => {
			res.type("application/json");
			res.send(err ? err : { message: `Deleted ${id}!` });
		});
	});
});
/****** API ROUTES  ******/
app.listen(process.env.PORT || 4000, () => {
	console.log(`listening at [http://localhost:${process.env.PORT || 4000}]`);
});
