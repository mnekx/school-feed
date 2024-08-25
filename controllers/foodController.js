const { FoodContribution } = require('../models/FoodContribution');
const { FoodDistribution } = require('../models/FoodDistribution');
const { SchoolInventory } = require('../models/SchoolInventory');
const { UserSchool } = require('../models/UserSchool')

const addFoodContribution = async (req, res) => {
    try {
        const contribution = new FoodContribution(req.body);
        await contribution.save();
        res.status(201).json(contribution);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const addFoodDistribution = async (req, res) => {
    try {
        const distribution = new FoodDistribution(req.body);
        await distribution.save();
        res.status(201).json(distribution);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getSchoolInventory = async (req, res) => {
    try {
        const userId = req.user._id;
        const schoolId = req.params.schoolId;

        const schoolAccess = await UserSchool.findOne({ user: userId, school: schoolId });
        if (!schoolAccess) {
            return res.status(403).json({ msg: 'Access denied to this school\'s inventory.' });
        }

        const inventory = await SchoolInventory.find({ school: schoolId }).populate('foodType');
        res.json(inventory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = { addFoodContribution, addFoodDistribution, getSchoolInventory };
