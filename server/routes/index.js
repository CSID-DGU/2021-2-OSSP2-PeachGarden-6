var express = require('express');
var router = express.Router();
const db = require('./../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.getPlayer((rows) => {
    res.render('index', {rows : rows});
  });
});

module.exports = router;
