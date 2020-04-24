var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  res.send("from the post route")
  console.log(req.body)
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