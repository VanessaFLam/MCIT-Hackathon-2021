const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const con = mysql.createPool({
  host: "us-cdbr-east-03.cleardb.com",
  user: "ba6481c1132e15",
  password: "37d3184d",
  database: "heroku_bc546d54c5ccb15"
});

// app.get("/", (req, res) => {
// 	const sqlInsert = "INSERT INTO mcit-alum-database"
// 	db.query(sqlInsert, (err, result) => {

// 	});
// });

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post("/api/insert", (req, res)=> {

	const firstName = req.body.firstName
	const lastName = req.body.lastName
	const gradDate = req.body.gradDate
	const jobBefore = req.body.jobBefore
	const jobAfter = req.body.jobAfter
	const willMentor = req.body.willMentor
	const contact = req.body.contact

	const sqlInsert = "INSERT INTO mcit_alum_database (setFirstName, setLastName, setGradDate, setJobBefore, setJobAfter, setWillMentor, setContact) VALUES (?,?,?,?,?,?,?)"
	con.query(sqlInsert, [firstName
							, lastName
							, gradDate
							, jobBefore
							, jobAfter
							, willMentor
							, contact], (err, result) => {

							});
});




app.listen(3001, () => {
	console.log("running on port 3001");
});