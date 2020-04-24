var express = require('express');
var router = express.Router();
const Users = require("../models/User")
const Post = require("../models/Products")

router.post('/', async (req, res, next) => {
  console.log(req.body.email)
  const foundUser = await Users.findOne({email: req.body.email})
  console.log(foundUser, "<---------------------------------------whats inside here?? the user")
  const product = await Post.create({
    image: req.body.image,
    name: req.body.name,
    desc: req.body.desc,
    price: req.body.price
  })
  console.log(product, "<-------------------------------------------is it making this here?")
  foundUser.post.push(product)
  foundUser.save((err, saved) => {
    if(err){
      res.status(400).send({
        message: "Not saved"
      })
    }
    console.log("successfully saved")
  })
});

module.exports = router;

//<--------------------for posting products example------------------> 
//must bring in User and Posts with require
// router.post("/",async (req,res) => {
//   try{
//     const property = await Property.create(req.body)
//     const foundUser = await User.findById(req.session.userID)
//     foundUser.properties.push(property)
//     foundUser.save((err, savedUser) => {
//       res.redirect(`/property/${property._id}`)
//     })
//   } catch(err){
//     console.log(err)
//   }
// })