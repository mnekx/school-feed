// models/FoodDistribution.js
const mongoose = require('mongoose');

const FoodDistributionSchema = new mongoose.Schema({
    distribution_date: { type: Date, required: true },
    verified: { type: Boolean, default: false },
    verified_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    school: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true },
    distributed_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const FoodDistribution = mongoose.model('FoodDistribution', FoodDistributionSchema);
module.exports = { FoodDistribution };
