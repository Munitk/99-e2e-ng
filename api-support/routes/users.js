var express = require('express');
var router = express.Router();
let dbConnection = require('./../db/db').localConnect();
/* GET users listing. */
router.get('/', function(req, res, next) {
dbConnection.query('select * from user_profile',(error,resluts,fields) =>{
  if (error) throw error;
  res.send(resluts);
})
});

module.exports = router;
