const express = require('express');
const { addFoodContribution, addFoodDistribution, getSchoolInventory } = require('../controllers/foodController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/contributions', authMiddleware, addFoodContribution);
router.post('/distributions', authMiddleware, addFoodDistribution);
router.get('/inventory/:schoolId', authMiddleware, getSchoolInventory);

module.exports = router;
