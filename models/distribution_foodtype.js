// models/DistributionFoodType.js
const mongoose = require('mongoose');

const DistributionFoodTypeSchema = new mongoose.Schema({
    distribution: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodDistribution', required: true },
    foodType: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodType', required: true },
    quantity_kg: { type: Number, required: true }
});

const DistributionFoodType = mongoose.model('DistributionFoodType', DistributionFoodTypeSchema);
module.exports = { DistributionFoodType };
