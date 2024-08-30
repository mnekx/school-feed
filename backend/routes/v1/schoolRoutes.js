const express = require('express');
const { addSchool, getAllSchools, getSchoolById, updateSchool, deleteSchool, addYearlyData } = require('../../controllers/schoolController');
const { authMiddleware, adminMiddleware } = require('../../middleware/authMiddleware');
const { checkLocationAccess } = require('../../middleware/locationMiddleware');

const router = express.Router();

router.post('/', authMiddleware, adminMiddleware, checkLocationAccess, addSchool);
router.get('/', authMiddleware, getAllSchools);
router.get('/:id', authMiddleware, checkLocationAccess, getSchoolById);
router.put('/:id', authMiddleware, adminMiddleware, checkLocationAccess, updateSchool);
router.delete('/:id', authMiddleware, adminMiddleware, checkLocationAccess, deleteSchool);
router.post('/:id/yearlyData', authMiddleware, adminMiddleware, checkLocationAccess, addYearlyData);

module.exports = router;
