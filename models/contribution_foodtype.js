// models/ContributionFoodType.js
const mongoose = require('mongoose');

const ContributionFoodTypeSchema = new mongoose.Schema({
    contribution: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodContribution', required: true },
    foodType: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodType', required: true },
    quantity_kg: { type: Number, required: true }
});

const ContributionFoodType = mongoose.model('ContributionFoodType', ContributionFoodTypeSchema);
module.exports = { ContributionFoodType };
