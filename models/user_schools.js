// models/UserSchool.js
const mongoose = require('mongoose');

const UserSchoolSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    school: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true },
    role: { type: String, required: true } // You can store the user's role within this specific school context
});

const UserSchool = mongoose.model('UserSchool', UserSchoolSchema);
module.exports = { UserSchool };
