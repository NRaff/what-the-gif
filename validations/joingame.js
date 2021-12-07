const validText = require('./valid-text')
const Validator = require('validator')

module.exports = function validateGameJoin(data) {
  let errors = {};

  data.gameCode = validText(data.gameCode) ? data.gameCode : '';
  // data.password = validText(data.password) ? data.password : '';

  if (Validator.isEmpty(data.gameCode)) {
    errors.gameCode = 'Game Code is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};