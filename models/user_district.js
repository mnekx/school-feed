// models/UserDistrict.js
const mongoose = require('mongoose');

const UserDistrictSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    district: { type: mongoose.Schema.Types.ObjectId, ref: 'District', required: true }
});

const UserDistrict = mongoose.model('UserDistrict', UserDistrictSchema);
module.exports = { UserDistrict };
