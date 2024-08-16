// models/District.js
const mongoose = require('mongoose');

const DistrictSchema = new mongoose.Schema({
    name: { type: String, required: true },
    region: { type: mongoose.Schema.Types.ObjectId, ref: 'Region', required: true }
});

const District = mongoose.model('District', DistrictSchema);
module.exports = { District };
