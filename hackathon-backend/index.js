const express = require ('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const SELECT_ALL_QUERY = 'SELECT * FROM test';

const connection = mysql.createConnection({
  host: "us-cdbr-east-03.cleardb.com",
  user: "ba6481c1132e15",
  password: "37d3184d",
  database: "heroku_bc546d54c5ccb15"
});

connection.connect(err => {
	if(err) {
		return err;
	}
});

app.use(cors());

app.get('/', (req,res) => {
 res.send('homepage')
});

app.get('/products', (req,res) => {
	connection.query(SELECT_ALL_QUERY, (err, results) => {
		if(err) {
			return res.send(err)
		}
		else {
			return res.json({
				data:results
			})
		}
	});
});

app.get('/products/add', (req,res) => {
	const{ name, price } = req.query;
	console.log(name,price);
	const INSERT_PRODUCTS_QUERY = "INSERT INTO test (name, price) VALUES(?,?)"
	connection.query(INSERT_PRODUCTS_QUERY, [name, price], (err,results) => {
		if(err) {
			return res.send(err)
		} else {
			return res.send('successfully added product')
		}
	});
});

app.listen(3001, () => {
	console.log('products server listening on port 3001')
});

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const app = express();
// const mysql = require('mysql');

// const con = mysql.createPool({
//   host: "us-cdbr-east-03.cleardb.com",
//   user: "ba6481c1132e15",
//   password: "37d3184d",
//   database: "heroku_bc546d54c5ccb15"
// });

// // app.get("/", (req, res) => {
// // 	const sqlInsert = "INSERT INTO mcit-alum-database"
// // 	db.query(sqlInsert, (err, result) => {

// // 	});
// // });

// // connection.connect(err => {
// // 	if(err) {
// // 		return err;
// // 	}
// // });

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({extended:true}));

// // app.post("/api/insert", (req, res)=> {

// // 	const firstName = req.body.firstName
// // 	const lastName = req.body.lastName
// // 	const gradDate = req.body.gradDate
// // 	const jobBefore = req.body.jobBefore
// // 	const jobAfter = req.body.jobAfter
// // 	const willMentor = req.body.willMentor
// // 	const contact = req.body.contact

// // 	const sqlInsert = "INSERT INTO mcit_alum_database (setFirstName, setLastName, setGradDate, setJobBefore, setJobAfter, setWillMentor, setContact) VALUES (?,?,?,?,?,?,?)"
// // 	con.query(sqlInsert, [firstName
// // 							, lastName
// // 							, gradDate
// // 							, jobBefore
// // 							, jobAfter
// // 							, willMentor
// // 							, contact], (err, result) => {

// // 							});
// // });

// // app.get('/api/insert', (req, res) => {
// // 	const { id, name }, req.query;
// // 	console.log(name, price);
// // 	res.send("adding product");
// // });

// app.get('/', (req, res) => {
// 	res.send('hello from products')
// });


// app.listen(3001, () => {
// 	console.log("running on port 3001");
// });