// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '12345678',
  database : 'acamica'
});

module.exports = connection;
