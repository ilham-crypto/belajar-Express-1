var express = require('express');
var router = express.Router();

var connection = require('../libary/database')


/* GET users listing. */
router.get('/', function (req, res, next) {
  //query
  connection.query('select * from users', function (err, rows) {
    res.render('users', { data: rows })
  });
})

module.exports = router;
