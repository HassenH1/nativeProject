const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  description: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;