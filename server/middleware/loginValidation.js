/* eslint-disable no-negated-condition */
/* eslint-disable no-ternary */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */
/* eslint-disable multiline-ternary */
import Validator from 'validator';
import isEmpty from '../middleware/IsEmpty';

module.exports = function validateLogin(data) {
  const errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';


  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email Field is required';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password Field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
