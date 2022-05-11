var mysql      = require('mysql');
let learn = function(){
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'thbs',
        insecureAuth : true
      });
      return connection;
};
module.exports.localConnect=learn;