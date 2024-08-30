const { Meeting } = require('../models/Meeting');
const { MeetingSchoolChallenge } = require('../models/MeetingSchoolChallenge');
const { UserSchool } = require('../models/UserSchool');

const createMeeting = async (req, res) => {
  try {
    const meeting = new Meeting(req.body);
    await meeting.save();

    const { schools, challenges } = req.body;
    for (let schoolId of schools) {
      for (let challengeId of challenges) {
        const msc = new MeetingSchoolChallenge({
          meeting: meeting._id,
          school: schoolId,
          challenge: challengeId,
        });
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
    const userId = req.user._id;

    const schools = await UserSchool.find({ user: userId }).select('school');
    const meetings = await Meeting.find({
      schools: { $in: schools.map((loc) => loc.school) },
    });

    res.json(meetings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getMeetingById = async (req, res) => {
  try {
    const userId = req.user._id;
    const meetingId = req.params.id;

    const meeting = await Meeting.findById(meetingId).populate('schools');
    if (!meeting) {
      return res.status(404).json({ msg: 'Meeting not found' });
    }

    const authorized = meeting.schools.some((school) =>
      UserSchool.findOne({ user: userId, school: school._id })
    );
    if (!authorized) {
      return res.status(403).json({ msg: 'Access denied to this meeting.' });
    }

    res.json(meeting);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createMeeting, getAllMeetings, getMeetingById };
