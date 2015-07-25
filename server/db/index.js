var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

exports.dbConnection = mysql.createConnection({
  // host: "localhost:3000",
  user: "root",
  password: "",
  database: "chat"
});
exports.dbConnection.connect();

// var queryString = 'SELECT * FROM messages';
 
// exports.dbConnection.query(queryString, function(err, rows, fields) {
//     if (err) throw err;
 
//     for (var i in rows) {
//         console.log('Post Titles: ', rows[i].post_title);
//     }
// });

