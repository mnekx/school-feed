const { School } = require('../models/School');
const { SchoolYearlyData } = require('../models/SchoolYearlyData');
const { UserSchool } = require('../models/UserSchool');
const { UserRegion } = require('../models/UserRegion');
const { UserDistrict } = require('../models/UserDistrict');
const { UserWard } = require('../models/UserWard');
const { UserVillage } = require('../models/UserVillage');

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
    const userId = req.user._id;

    const regions = await UserRegion.find({ user: userId }).select('region');
    const districts = await UserDistrict.find({ user: userId }).select(
      'district'
    );
    const wards = await UserWard.find({ user: userId }).select('ward');
    const villages = await UserVillage.find({ user: userId }).select('village');
    const schools = await UserSchool.find({ user: userId }).select('school');

    const query = {
      $or: [
        { region: { $in: regions.map((loc) => loc.region) } },
        { district: { $in: districts.map((loc) => loc.district) } },
        { ward: { $in: wards.map((loc) => loc.ward) } },
        { village: { $in: villages.map((loc) => loc.village) } },
        { _id: { $in: schools.map((loc) => loc.school) } },
      ],
    };

    const schoolsData = await School.find(query);
    res.json(schoolsData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getSchoolById = async (req, res) => {
  try {
    const userId = req.user._id;
    const schoolId = req.params.id;

    const schoolAccess = await UserSchool.findOne({
      user: userId,
      school: schoolId,
    });
    if (!schoolAccess) {
      return res.status(403).json({ msg: 'Access denied to this school.' });
    }

    const school = await School.findById(schoolId);
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
    const school = await School.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
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

module.exports = {
  addSchool,
  getAllSchools,
  getSchoolById,
  updateSchool,
  deleteSchool,
  addYearlyData,
};
