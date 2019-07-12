/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable max-len */
/* eslint-disable sort-imports */
/* eslint-disable linebreak-style */
import express from 'express';
import { createUser, getAllUsers, getUserById } from '../controller/userscontroler';
import { createProperty, getAllProperties, getPropertyById, getPropertyBytype } from '../controller/propertiescontroller';
const router = express.Router();


router.get('/users', getAllUsers);
router.get('/users/:Id', getUserById);
router.post('/user', createUser);

router.get('/properties', getAllProperties);
router.get('/properties/:Id', getPropertyById);
router.get('/properties/type/:type', getPropertyBytype);
router.post('/properties', createProperty);


export default router;
