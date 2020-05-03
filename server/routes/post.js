var express = require('express');
var router = express.Router();
const Users = require("../models/User")
const Post = require("../models/Products")

router.get('/get', async (req, res, next) => {
  console.log("why is this not running?")
  const getPosts = await Post.find({})
  res.send(getPosts)
})

router.post('/', async (req, res, next) => {
  console.log(req.body.email)
  const foundUser = await Users.findOne({ email: req.body.email })
  const product = await Post.create({
    image: req.body.image,
    name: req.body.name,
    desc: req.body.desc,
    price: req.body.price
  })
  foundUser.post.push(product)
  foundUser.save((err, saved) => {
    if (err) {
      res.status(400).send({
        message: "Not saved"
      })
    }
    res.send({
      message: "success"
    })
  })
});

module.exports = router;