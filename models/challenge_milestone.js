// models/ChallengeLifecycle.js
const mongoose = require('mongoose');

const ChallengeMileStoneSchema = new mongoose.Schema({
    challenge: { type: mongoose.Schema.Types.ObjectId, ref: 'Challenge', required: true },
    status: { type: String, enum: ['emerged', 'in_progress', 'pending_solution', 'resolved', 'closed'], required: true },
    changed_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    change_date: { type: Date, default: Date.now },
    comments: { type: String }
});

const ChallengeMileStone = mongoose.model('ChallengeMileStone', ChallengeMileStoneSchema);
module.exports = { ChallengeMileStone };