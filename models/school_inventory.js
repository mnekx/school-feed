// models/SchoolInventory.js
const mongoose = require('mongoose');

const SchoolInventorySchema = new mongoose.Schema({
    school: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true },
    foodType: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodType', required: true }, // Reference to FoodType
    current_stock_kg: { type: Number, required: true },
    last_updated: { type: Date, default: Date.now },
    updated_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const SchoolInventory = mongoose.model('SchoolInventory', SchoolInventorySchema);
module.exports = { SchoolInventory };
