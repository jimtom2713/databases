var db = require('../db');
// var sqlize = require('../../orm-resources/chatterbox-orm');


// SELECT * FROM table ORDER BY timestamp DESC

// module.exports = {
//   messages: {
//     get: function (callback) {
//       var queryString = 'SELECT * from messages ORDER BY time DESC';
//       db.dbConnection.query(queryString, function(err, rows){
//         callback(rows);
//       })
//     }, // a function which produces all the messages
//     post: function (message, callback) {
//       var queryString = 'INSERT into messages (text, username, roomname) values ("' + message.text.toString() +'","'+message.username+'","'+message.roomname+'")';
//       db.dbConnection.query(queryString);
//       callback();
//     } // a function which can be used to insert a message into the database
//   },
//   users: {
//     get: function(){

//     },
//     post: function(){

//     }
//   }
// };

module.exports = {
  messages: {
    post: function(message, callback){
      // db.Message.sync().success(function(){
        newMessage = db.Message.build({
          username: message.username,
          text: message.text,
          roomname: message.roomname
        });
        // console.log('new message ', newMessage);
        newMessage.save().then(function(){
          console.log('callback function is ', callback)
          callback();
        })
      // })
    },
    get: function(callback){
      // db.Message.sync().success(function(){
        db.Message.findAll({order: 'updatedAt DESC'}).then(function(messages){
          callback(messages);
        })
      // })
    }
  }
};