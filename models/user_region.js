// models/UserRegion.js
const mongoose = require('mongoose');

const UserRegionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    region: { type: mongoose.Schema.Types.ObjectId, ref: 'Region', required: true }
});

const UserRegion = mongoose.model('UserRegion', UserRegionSchema);
module.exports = { UserRegion };
