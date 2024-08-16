// models/UserWard.js
const mongoose = require('mongoose');

const UserVillageSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    ward: { type: mongoose.Schema.Types.ObjectId, ref: 'Village', required: true }
});

const UserVillage = mongoose.model('UserVillage', UserVillageSchema);
module.exports = { UserVillage };
