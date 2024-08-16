const express = require('express');
const { addSchool, getAllSchools, getSchoolById, updateSchool, deleteSchool, addYearlyData } = require('../controllers/schoolController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, adminMiddleware, addSchool);
router.get('/', authMiddleware, getAllSchools);
router.get('/:id', authMiddleware, getSchoolById);
router.put('/:id', authMiddleware, adminMiddleware, updateSchool);
router.delete('/:id', authMiddleware, adminMiddleware, deleteSchool);
router.post('/:id/yearlyData', authMiddleware, adminMiddleware, addYearlyData);

module.exports = router;
