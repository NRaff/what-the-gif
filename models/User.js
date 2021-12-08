const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  displayName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  curHand: {
    type: Array,
    required: true
  },
  favGIF: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = User = mongoose.model('User', UserSchema)