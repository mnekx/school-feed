const express = require('express');
const {
    createChallenge,
    getAllChallenges,
    getChallengeById,
    updateChallenge,
    deleteChallenge,
    addMilestone,
    getMilestonesByChallenge
} = require('../controllers/challengeController');
const { authMiddleware } = require('../middleware/authMiddleware');
const { checkLocationAccess } = require('../middleware/locationMiddleware');

const router = express.Router();

router.post('/', authMiddleware, checkLocationAccess, createChallenge);
router.get('/', authMiddleware, checkLocationAccess, getAllChallenges);
router.get('/:id', authMiddleware, checkLocationAccess, getChallengeById);
router.put('/:id', authMiddleware, checkLocationAccess, updateChallenge);
router.delete('/:id', authMiddleware, checkLocationAccess, deleteChallenge);
router.post('/:id/milestones', authMiddleware, checkLocationAccess, addMilestone);
router.get('/:id/milestones', authMiddleware, checkLocationAccess, getMilestonesByChallenge);

module.exports = router;
