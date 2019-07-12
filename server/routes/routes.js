/* eslint-disable max-len */
import express from 'express';
import { createUser, getAllUsers, getUserById } from '../controllers/userControl';
import { createProperty, getAllProperties, getPropertyById, getPropertyByType } from '../controllers/propertyControl';
const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/user', createUser);

// router.post("/user/login", signinUser)

router.get('/properties', getAllProperties);
router.get('/properties/:id', getPropertyById);
router.get('/properties/type/:type', getPropertyByType);
router.post('/property', createProperty);


export default router;
