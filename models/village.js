// models/Village.js
const mongoose = require('mongoose');

const VillageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ward: { type: mongoose.Schema.Types.ObjectId, ref: 'Ward', required: true }
});

const Village = mongoose.model('Village', VillageSchema);
module.exports = { Village };
