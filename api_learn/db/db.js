const Connection = require('mysql/lib/Connection');
var mysql = require('mysql2');
require('dotenv').config();
// let learn = function () {
//     var connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'root',
//         database: 'api_learn',
//         insecureAuth: true
//     });
//     return connection;
// }
//  connection.connect();
//  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
// connection.end();
let mysqlConnect = function () {
    return mysql.createConnection({
        // host: process.env.DB_HOST,
        // user: process.env.DB_USER,
        // password: process.env.DB_PASSWORD,
        // database: process.env.DB_NAME,
        // insecureAuth : true
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD, 
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
        insecureAuth: true
    });
};

let createTable = `create table if not exists user_profile(
    id int primary key auto_increment,
    title varchar(255)not null,
    completed tinyint(1) not null default 0
)`;

mysqlConnect().query(createTable, (error, results, fields) => {
    if (error) throw error;
});
module.exports.localConnect = learn;
