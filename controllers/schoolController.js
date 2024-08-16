const { School } = require('../models/schools');
const { SchoolYearlyData } = require('../models/school_yearly_data');

const addSchool = async (req, res) => {
    try {
        const school = new School(req.body);
        await school.save();
        res.status(201).json(school);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAllSchools = async (req, res) => {
    try {
        const schools = await School.find();
        res.json(schools);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getSchoolById = async (req, res) => {
    try {
        const school = await School.findById(req.params.id);
        if (!school) {
            return res.status(404).json({ msg: 'School not found' });
        }
        res.json(school);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateSchool = async (req, res) => {
    try {
        const school = await School.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!school) {
            return res.status(404).json({ msg: 'School not found' });
        }
        res.json(school);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteSchool = async (req, res) => {
    try {
        const school = await School.findByIdAndDelete(req.params.id);
        if (!school) {
            return res.status(404).json({ msg: 'School not found' });
        }
        res.json({ msg: 'School deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const addYearlyData = async (req, res) => {
    try {
        const data = new SchoolYearlyData(req.body);
        await data.save();
        res.status(201).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { addSchool, getAllSchools, getSchoolById, updateSchool, deleteSchool, addYearlyData };
