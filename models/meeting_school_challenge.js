// models/MeetingSchool.js
const mongoose = require('mongoose');

const MeetingSchoolSchema = new mongoose.Schema({
  meeting: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Meeting',
    required: true,
  },
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
    required: true,
  },
  challenge: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Challenge',
    required: true,
  },
  other_discussions: { type: String },
});

const MeetingSchool = mongoose.model('MeetingSchool', MeetingSchoolSchema);
module.exports = { MeetingSchool };
