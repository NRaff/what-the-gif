const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PlayerSchema = require('./Player')

const GameSchema = new Schema({
  winner: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  players: {
    type: [PlayerSchema],
    required: true
  },
  round: {
    type: Schema.Types.ObjectId,
    ref: 'rounds'
  }
})

module.exports = Game = mongoose.model('Game', GameSchema)