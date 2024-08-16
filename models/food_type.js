// models/FoodType.js
const mongoose = require('mongoose');

const FoodTypeSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }, // Name of the food type, e.g., "Maize", "Rice"
    description: { type: String } // Optional description of the food type
});

const FoodType = mongoose.model('FoodType', FoodTypeSchema);
module.exports = { FoodType };
