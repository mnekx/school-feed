// models/Meeting.js
const mongoose = require('mongoose');

const MeetingSchema = new mongoose.Schema({
    meeting_date: { type: Date, required: true },
    location: { type: String, required: true },
    level: { type: String, required: true }, // E.g., village, ward, district, region
    organized_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    
});

const Meeting = mongoose.model('Meeting', MeetingSchema);
module.exports = { Meeting };
