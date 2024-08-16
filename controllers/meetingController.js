const { Meeting } = require('../models/Meeting');
const { MeetingSchoolChallenge } = require('../models/MeetingSchoolChallenge');

const createMeeting = async (req, res) => {
    try {
        const meeting = new Meeting(req.body);
        await meeting.save();

        const { schools, challenges } = req.body;
        for (let schoolId of schools) {
            for (let challengeId of challenges) {
                const msc = new MeetingSchoolChallenge({ meeting: meeting._id, school: schoolId, challenge: challengeId });
                await msc.save();
            }
        }

        res.status(201).json(meeting);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAllMeetings = async (req, res) => {
    try {
        const meetings = await Meeting.find();
        res.json(meetings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getMeetingById = async (req, res) => {
    try {
        const meeting = await Meeting.findById(req.params.id);
        if (!meeting) {
            return res.status(404).json({ msg: 'Meeting not found' });
        }
        res.json(meeting);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createMeeting, getAllMeetings, getMeetingById };
