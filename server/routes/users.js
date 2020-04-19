var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/signup', function(req, res, next) {
  console.log(req.body, "<----------------------the body")
  res.send('signup route is hitting');
});

router.post('/login', function(req, res, next) {
  res.send('login');
});

module.exports = router;
