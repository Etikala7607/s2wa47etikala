var express = require('express');
var router = express.Router();
var times = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  times = times+1;
  res.send('Access' + times);
});
module.exports = router;
