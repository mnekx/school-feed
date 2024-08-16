const express = require('express');
const { createUser, getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const { checkLocationAccess } = require('../middleware/locationMiddleware');

const router = express.Router();

router.post('/create', authMiddleware, adminMiddleware, createUser);
router.get('/', authMiddleware, getAllUsers);
router.get('/:id', authMiddleware, getUserById);
router.put('/:id', authMiddleware, adminMiddleware, checkLocationAccess, updateUser);
router.delete('/:id', authMiddleware, adminMiddleware, checkLocationAccess, deleteUser);

module.exports = router;
