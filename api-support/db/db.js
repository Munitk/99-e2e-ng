// var mysql = require('mysql');
// let learn = function () {
//     var connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: 'root',
//         database: 'thbs',
//         insecureAuth: true
//     });
//     return connection;
// };
// module.exports.localConnect = learn;
var mysql = require('mysql');
require('dotenv').config();

// console.log(process.env)

let mysqlConnect = function () {
    return mysql.createConnection({
        // host: process.env.DB_HOST,
        // user: process.env.DB_USER,
        // password: process.env.DB_PASSWORD,
        // database: process.env.DB_NAME,
        // insecureAuth : true
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD, //should be yours 
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

// mysqlConnect().query(insetData, (error, results, fields) => {
//     if (error) throw error;
// });

module.exports.localConnect = mysqlConnect;