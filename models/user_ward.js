// models/UserWard.js
const mongoose = require('mongoose');

const UserWardSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    ward: { type: mongoose.Schema.Types.ObjectId, ref: 'Ward', required: true }
});

const UserWard = mongoose.model('UserWard', UserWardSchema);
module.exports = { UserWard };
