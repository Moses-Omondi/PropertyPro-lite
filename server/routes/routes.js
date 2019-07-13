/* eslint-disable no-undef */
/* eslint-disable max-len */
import express from 'express';
import { createUser, getAllUsers, getUserById } from '../controller/userscontroler';
import { createProperty, getAllProperties, getPropertyById, getPropertyByType } from '../controller/propertiescontroller';
const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:Id', getUserById);
router.post('/user', createUser);

// router.post("/user/login", signinUser)

router.get('/properties', getAllProperties);
router.get('/properties/:Id', getPropertyById);
router.get('/properties/type/:type', getPropertyByType);
router.post('/property', createProperty);
router.delete('/properlete', deleteProperty);


export default router;
