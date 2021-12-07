const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PlayerSchema = require('./Player')

const GameSchema = new Schema({
  winner: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  players: {
    type: [PlayerSchema],//{Player},
    required: true
  },
  round: {
    type: Schema.Types.ObjectId,
    ref: 'rounds'
  },
  gameOwner: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  gameCode: {
    type: String,
    required: true
  },
  maxPlayers: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})

module.exports = Game = mongoose.model('Game', GameSchema)