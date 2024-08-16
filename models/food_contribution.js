// models/FoodContribution.js
const mongoose = require('mongoose');

const FoodContributionSchema = new mongoose.Schema({
    source: { type: String, required: true },
    contribution_date: { type: Date, required: true },
    verified: { type: Boolean, default: false },
    verified_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    school: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true }
});

const FoodContribution = mongoose.model('FoodContribution', FoodContributionSchema);
module.exports = { FoodContribution };
