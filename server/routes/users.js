var express = require('express');
var router = express.Router();
const Users = require("../models/User")

/* GET users listing. */
router.post('/signup', async (req, res, next) => {
  console.log(req.body, "<----------------------the body")
  try {
    const createUser = await Users.create(req.body)
    res.json(createUser)
  } catch (err) {
    console.log(err)
  }
});

router.post('/login', function (req, res, next) {
  res.send('login');
});

module.exports = router;
