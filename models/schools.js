// models/School.js
const mongoose = require('mongoose');

const SchoolSchema = new mongoose.Schema({
    name: { type: String, required: true },
    region: { type: mongoose.Schema.Types.ObjectId, ref: 'Region', required: true },
    district: { type: mongoose.Schema.Types.ObjectId, ref: 'District', required: true },
    ward: { type: mongoose.Schema.Types.ObjectId, ref: 'Ward', required: true },
    village: { type: mongoose.Schema.Types.ObjectId, ref: 'Village', required: true },
    total_students: { type: Number, required: true }
});

const School = mongoose.model('School', SchoolSchema);
module.exports = { School };
