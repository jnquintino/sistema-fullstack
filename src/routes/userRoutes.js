const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateJWT = require('../authenticateJWT');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.post('/login', userController.login);
router.put('/:id', authenticateJWT, userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
