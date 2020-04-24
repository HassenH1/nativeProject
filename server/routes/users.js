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

router.post('/login', async (req, res, next) => {
  //need to finish this route as well
  try {
    const get = await Users.findOne({ "email": req.body.email, "password": req.body.password })
    console.log(get, "<----------------------------------get the user here?")
    if (get === null) {
      res.status(400).send({
        message: 'field cannot be empty!'
      });
      return
    } else {
      res.json(get)
    }
  } catch (err) {
    console.log(err)
  }
});

module.exports = router;