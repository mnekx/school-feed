// models/Ward.js
const mongoose = require('mongoose');

const WardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    district: { type: mongoose.Schema.Types.ObjectId, ref: 'District', required: true }
});

const Ward = mongoose.model('Ward', WardSchema);
module.exports = { Ward };
