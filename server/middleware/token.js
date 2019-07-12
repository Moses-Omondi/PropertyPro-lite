/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */
/* eslint-disable no-process-env */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


class Token {
  static generateToken(payload) {
    const token = jwt.sign(payload, process.env.JWT_KEY, {
      expiresIn: '2h',
    });
    return token;
  }
}

export default Token;

