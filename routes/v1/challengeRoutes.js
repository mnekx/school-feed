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

const router = express.Router();

router.post('/', authMiddleware, createChallenge);
router.get('/', authMiddleware, getAllChallenges);
router.get('/:id', authMiddleware, getChallengeById);
router.put('/:id', authMiddleware, updateChallenge);
router.delete('/:id', authMiddleware, deleteChallenge);
router.post('/:id/milestones', authMiddleware, addMilestone);
router.get('/:id/milestones', authMiddleware, getMilestonesByChallenge);

module.exports = router;
