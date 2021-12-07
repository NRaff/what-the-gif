const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCreateGameInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Game Name field is required';
  }

  if (Validator.isEmpty(data.maxPlayers.toString())) {
    errors.maxPlayers = 'Max Players is required'
  }

  if (Validator.isEmpty(data.scoreToWin.toString())) {
    errors.scoreToWin = 'Max Score is required'
  }

  if (Validator.isEmpty(data.roundTimeLimit.toString())) {
    errors.roundTimeLimit = 'Round Time Limit is required'
  }

  if (Validator.isEmpty(data.gameCode)) {
    errors.gameCode = 'Game Code is required'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}
