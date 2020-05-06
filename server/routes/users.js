var express = require('express');
var router = express.Router();
const Users = require("../models/User")

router.post('/signup', async (req, res, next) => {
  try {
    const createUser = await Users.create(req.body)
    res.json(createUser)
  } catch (err) {
    console.log(err)
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const get = await Users.findOne({ "email": req.body.email, "password": req.body.password })
    if (get === null) {
      res.status(400).send({
        message: 'Cannot find user!'
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