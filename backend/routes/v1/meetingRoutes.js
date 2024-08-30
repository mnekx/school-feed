const express = require('express');
const { createMeeting, getAllMeetings, getMeetingById } = require('../../controllers/meetingController');
const { authMiddleware } = require('../../middleware/authMiddleware');
const { checkLocationAccess } = require('../../middleware/locationMiddleware');

const router = express.Router();

router.post('/', authMiddleware, checkLocationAccess, createMeeting);
router.get('/', authMiddleware, checkLocationAccess, getAllMeetings);
router.get('/:id', authMiddleware, checkLocationAccess, getMeetingById);

module.exports = router;
