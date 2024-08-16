// models/SchoolYearlyData.js
const mongoose = require('mongoose');

const SchoolYearlyDataSchema = new mongoose.Schema({
    school: { type: mongoose.Schema.Types.ObjectId, ref: 'School', required: true },
    year: { type: Number, required: true },
    
    // Students
    male_primary_students: { type: Number, default: 0 },
    female_primary_students: { type: Number, default: 0 },
    male_pre_students: { type: Number, default: 0 },
    female_pre_students: { type: Number, default: 0 },
    
    // Teachers
    male_teachers: { type: Number, default: 0 },
    female_teachers: { type: Number, default: 0 },
    
    // Other Staff
    male_other_staff: { type: Number, default: 0 },
    female_other_staff: { type: Number, default: 0 },
    
    // Pass Rate
    male_pass: { type: Number, default: 0 },  // Could be a percentage or count
    female_pass: { type: Number, default: 0 } // Could be a percentage or count
});

const SchoolYearlyData = mongoose.model('SchoolYearlyData', SchoolYearlyDataSchema);
module.exports = { SchoolYearlyData };
