const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');

router.get('/', userController.getAllUsers);

router.put('/:id', userController.updateUserStatus);

router.post('/', userController.createUser);

module.exports = router;
