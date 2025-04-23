const express = require('express');
const router = express.Router(); 
const {body} = require('express-validator');
const userController = require('../controller/user.controller');

router.post('/register', [
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({min: 5}).withMessage('Password must be at least 5 characters long'),
    body('fullname.firstname').notEmpty().withMessage('First name is required'),
],
userController.registerUser);

module.exports = router;