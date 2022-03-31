var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const x= req.query.x || getRandomArbitrary(0, 60);
  var a1 = Math.log2(x);
  var a2 = Math.cosh(x);
  var a3 = Math.floor(x);
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  res.send(`Math.log2(${x}) is ${a1} ; Math.cosh(${x}) is ${a2} ; Math.floor(${x}) is ${a3}\n`);
});

module.exports = router;