// var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// exports.dbConnection = mysql.createConnection({
//   // host: "localhost:3000",
//   user: "root",
//   password: "",
//   database: "chat"
// });
// exports.dbConnection.connect();


var Sequelize = require("sequelize");


var sequelize = new Sequelize("chats", "root", "");

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var User = sequelize.define('User', {
  username: Sequelize.STRING
});

exports.Message = sequelize.define('Message', {
  // objectId: Sequelize.INTEGER,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING, 
  username: Sequelize.STRING,
  // time: Sequelize.NOW
});