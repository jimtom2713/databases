var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(data){
        res.end(JSON.stringify({results:data}));
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, function(data){
        res.end();
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};