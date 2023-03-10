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

app.use(express.json())
app.use(function (error, req, res, next) {
  if (error.status === 400) {
    log.info(error.body);
    return res.send(400);
  }

  console.log(error);

});

app.post('/api/login',(req, res)=>{
  let recUserinfo = req.body.account
  console.log('login')
  connection.query(`SELECT * FROM user WHERE username='${recUserinfo.username}'`, (error, rows) => {
    if (error) throw error;
    if (rows.length === 0) {
      console.log('no account')
      res.send('0');
    } else {
      if (rows[0].password === recUserinfo.password) {
        console.log('com')
        res.send('1');
      } else {
        res.send('2')
        console.log('password')
      }
    }
  });
});

app.post('/api/resister',(req, res) => {
  let recUserinfo = req.body.account
  console.log(recUserinfo)
  connection.query(`SELECT * FROM user WHERE username='${recUserinfo.username}'`, (error, rows) =>{
    if (error) throw error;
  if (rows.length === 0) {
    let userinfo = ({
      "username" : recUserinfo.username,
      "password" : recUserinfo.password,
      "class" : "user"
    });
    res.send(true)
    connection.query(`INSERT INTO user VALUES ('${recUserinfo.username}','${recUserinfo.password}')`, (error) => {
      if (error) throw error;
    });
    connection.query(`INSERT INTO timetable VALUES ('${recUserinfo.username}',"-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-,-")`)
  } else {
    res.send(false)
  }
  });
});

app.post('/api/getlist',(req, res) => {
  let recUserinfo = req.body.account
  
  connection.query(`SELECT * FROM timetable WHERE username='${recUserinfo.username}'`, (error, rows) => {
    if(error) throw error;
    console.log(rows)
    res.send(rows)
  })
});

app.post('/api/tablefill',(req, res) => {
  const recTableValue = req.body.packet.tableList
  const recUserinfo = req.body.packet.username
  console.log(req.body)
  connection.query(`UPDATE timetable SET timetable='${tableString} WHERE username='${recUserinfo}'`, (error, rows) => {
    if(error) throw error;
  })
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

//?????? ??? ????????? ?????? ???
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});