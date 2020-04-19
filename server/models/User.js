const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  post: [{ type: Schema.Types.ObjectId, ref: 'Products' }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;