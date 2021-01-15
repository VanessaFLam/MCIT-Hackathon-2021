
var mysql = require('mysql');
var cors = require("cors");

var con = mysql.createConnection({
  host: "us-cdbr-east-03.cleardb.com",
  user: "ba6481c1132e15",
  password: "37d3184d",
  database: "heroku_bc546d54c5ccb15"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


var express = require('express');
var app = express();

app.get('/apple', function (req, res) {
   res.send({ id: 0, name: 'gregory', gender: 'm' });
})

app.use(cors());

app.get('/jobs', function (req, res) {
    con.query("SELECT * FROM heroku_bc546d54c5ccb15.samplejson3;", function (err, result) {
        if (err) throw err;
        res.send(result);
      });
    
 })

app.get('/christmas', function (req, res) {
    res.send("<h1>Santa</h1><p>Elf</p>");
 })

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})