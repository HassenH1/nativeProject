const mongoose = require('mongoose');

const propertySchema = mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  description: String
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;