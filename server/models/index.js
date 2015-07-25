var db = require('../db');


// SELECT * FROM table ORDER BY timestamp DESC

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'SELECT * from messages ORDER BY time DESC';
      db.dbConnection.query(queryString, function(err, rows){
        callback(rows);
      })
    }, // a function which produces all the messages
    post: function (message, callback) {
      var queryString = 'INSERT into messages (text, username, roomname) values ("' + message.text.toString() +'","'+message.username+'","'+message.roomname+'")';
      db.dbConnection.query(queryString);
      callback();//????? somehow back to fetch client?
    } // a function which can be used to insert a message into the database
  },


  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};




// var queryString = 'SELECT * FROM messages';
 
// exports.dbConnection.query(queryString, function(err, rows, fields) {
//     if (err) throw err;
 
//     for (var i in rows) {
//         console.log('Post Titles: ', rows[i].post_title);
//     }
// });



// insert into employee
//   (first, last, age, address, city, state)
//   values ('Luke', 'Duke', 45, '2130 Boars Nest', 
//           'Hazard Co', 'Georgia');

//   insert into messages (message, user, room) values ('Please work...', 'Tacocat', 'Home');