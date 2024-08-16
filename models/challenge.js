// models/Challenge.js
const mongoose = require('mongoose');

const ChallengeSchema = new mongoose.Schema({
  description: { type: String, required: true },
  reported_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  reported_at: { type: Date, default: Date.now },
  current_status: {
    type: String,
    enum: ['emerged', 'in_progress', 'pending_solution', 'resolved', 'closed'],
    default: 'emerged',
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
});

const Challenge = mongoose.model('Challenge', ChallengeSchema);
module.exports = { Challenge };
