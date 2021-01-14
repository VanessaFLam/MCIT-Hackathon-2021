
var mysql = require('mysql');
var cors = require("cors");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Zeng1998",
  database: "sys"
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
    con.query("select * from sys.jobs;", function (err, result) {
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