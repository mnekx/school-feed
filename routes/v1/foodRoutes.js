const express = require('express');
const { addFoodContribution, addFoodDistribution, getSchoolInventory } = require('../controllers/foodController');
const { authMiddleware } = require('../middleware/authMiddleware');
const { checkLocationAccess } = require('../middleware/locationMiddleware');

const router = express.Router();

router.post('/contributions', authMiddleware, checkLocationAccess, addFoodContribution);
router.post('/distributions', authMiddleware, checkLocationAccess, addFoodDistribution);
router.get('/inventory/:schoolId', authMiddleware, checkLocationAccess, getSchoolInventory);

module.exports = router;
