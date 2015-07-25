var Sequelize = require("sequelize");


var sequelize = new Sequelize("chats", "root", "");

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var User = sequelize.define('User', {
  username: Sequelize.STRING
});

var Message = sequelize.define('Message', {
  objectId: Sequelize.INTEGER,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING, 
  username: Sequelize.STRING,
  time: Sequelize.NOW
});

// User.sync().success(function() {

//   var newUser = User.build({username: "Jean Valjean"});
//   newUser.save().success(function() {

//     /* This callback function is called once saving succeeds. */

//     // Retrieve objects from the database:
//     User.findAll({ where: {username: "Jean Valjean"} }).success(function(usrs) {
//       // This function is called back with an array of matches.
//       for (var i = 0; i < usrs.length; i++) {
//         console.log(usrs[i].username + " exists");
//       }
//     });
//   });
// });
