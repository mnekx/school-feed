const { FoodContribution } = require('../models/FoodContribution');
const { FoodDistribution } = require('../models/FoodDistribution');
const { SchoolInventory } = require('../models/SchoolInventory');

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
        const inventory = await SchoolInventory.find({ school: req.params.schoolId }).populate('foodType');
        res.json(inventory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { addFoodContribution, addFoodDistribution, getSchoolInventory };
