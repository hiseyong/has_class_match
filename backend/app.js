const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');
const bodyParser = require("body-parser");

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1029',
  database : 'classmatch'
});


let ls = [];

app.use(function (error, req, res, next) {
  if (error.status === 400) {
    log.info(error.body);
    return res.send(400);
  }

  console.log(error);

});

app.post('/api/login',(req, res)=>{
  console.log(req)
  let recUserinfo = req.body.account
  connection.query(`SELECT * FROM user WHERE username='${recUserinfo.username}'`, (error, rows) => {
    if (error) throw error;
    ls = rows;
    if (ls.length === 0) {
      res.send(0);
    } else {
      if (ls[0].password === recUserinfo.password) {
        res.send(1);
        console.log('complete')
      } else {
        res.send(2)
      }
    }
  });
});

app.post('/api/resister',(req, res) => {
  let recUserinfo = req.body.name
  connection.query(`SELECT * FROM user WHERE username='${recUserinfo.username}'`, (error, rows) =>{
    if (error) throw error;
    upls = rows;
  if (upls.length === 0) {
    let userinfo = ({
      "username" : recUserinfo.username,
      "password" : recUserinfo.password,
      "class" : "user"
    });
    res.send(true)
    connection.query(`INSERT INTO user VALUES ('${recUserinfo.username}','${recUserinfo.password}', 'user')`, (error) => {
      if (error) throw error;
    });
  } else {
    res.send(false)
  }
  });
  
});

app.use(express.json());
var cors = require('cors');
app.use(cors());
connection.connect();



app.use(morgan("combined"));

app.listen(3000, '0.0.0.0');

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

//이건 맨 아래에 놓을 것
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});