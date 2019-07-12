/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
import express from 'express';
import createUser from '../controller/userscontroller';

const router = express.Router();

// create user signup route

router.post('/user', createUser);

// create user login route