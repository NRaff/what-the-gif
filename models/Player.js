const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  roundsWon: {
    type: Array,
    required: true,
    default: []
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
})
// module.exports = Player = mongoose.model('Player', PlayerSchema)
module.exports = PlayerSchema