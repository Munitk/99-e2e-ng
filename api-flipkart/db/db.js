const Connection = require('mysql/lib/Connection');
var mysql = require('mysql');
let learn = function () {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'flip_kart',
        insecureAuth: true
    });
    return connection;
}
module.exports.localConnect = learn;