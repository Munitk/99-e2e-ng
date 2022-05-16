var express = require('express');
const { request } = require('http');
var router = express.Router();
let dbConnection = require('./../db/db').localConnect();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// Signup database post and get method
router.get('/', function (req, res, next) {
  dbConnection.query('SELECT * FROM sign_up', (error, results, fields) => {
    if (error) throw error;
    res.send(results);

  });
  // res.send('respond with a resource');
});

//post methods-login

router.post('/sign-up', (req, res, next) => {
  console.log(req.body)
  let {
    FirstName,
    LastName,
    email,
    password,
    
  } = req.body

  let insertcommand = `INSERT INTO sign_up(FirstName,LastName,email,password)
   VALUES ('${FirstName}','${LastName}','${email}','${password}')`;

  dbConnection.query(insertcommand, (err, result) => {

    if (err) throw err;

    res.send("detailes are fetched from postman api detailes are inserted");

  });

})

router.get('/sign-up', function (req, res, next) {

  dbConnection.query('SELECT * FROM sign_up', (error, results, fields) => {
    if (error) throw error;
    res.send(results);

  });

  //res.send('respond with a resource');

});



//post methods-login

router.post('/dialog-overview', (req, res, next) => {
  let {
    email,
    password,
    
  } = req.body

  let insertcommand = `INSERT INTO order_now(email,password)
   VALUES ('${email}','${password}')`;

  dbConnection.query(insertcommand, (err, result) => {

    if (err) throw err;

    res.send("detailes are fetched from postman api detailes are inserted");

  });

})

router.get('/app-dialog-overview', function (req, res, next) {

  dbConnection.query('SELECT * FROM order_now', (error, results, fields) => {
    if (error) throw error;
    res.send(results);

  });

  //res.send('respond with a resource');

});
//post methods-login


//login and signup page connection

router.post('/app-dialog-overview', (req, res, next) => {
  let {
    email,
    password
  } = req.body; // destructing of object property 

  let userFound = `select * from sign_up  WHERE name = '${email}' and password= '${password}'`;

  dbConnection.query(userFound, (error, result, fields) => {

    if (error) {
      res.send(error);
    } else {
      if (result.length) {
        // res.send(`{message: 'user found', usercount: 1}`);
        res.json(result)
      } else {
        // res.send(`{message: 'user no found', usercount: 0}`);
        res.json({ message: 'user not found', usercount: 0 })
      }
    }

  });

});

module.exports = router;