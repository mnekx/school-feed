const express = require('express');
const { createMeeting, getAllMeetings, getMeetingById } = require('../controllers/meetingController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createMeeting);
router.get('/', authMiddleware, getAllMeetings);
router.get('/:id', authMiddleware, getMeetingById);

module.exports = router;
