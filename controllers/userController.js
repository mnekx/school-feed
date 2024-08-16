const bcrypt = require('bcryptjs');
const { User } = require('../models/user');
const { UserSchool } = require('../models/user_schools');
const { UserRegion } = require('../models/user_region');
const { UserDistrict } = require('../models/user_district');
const { UserWard } = require('../models/user_ward');
const { UserVillage } = require('../models/user_village');

const createUser = async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ msg: 'Permission denied' });
        }

        const { name, email, password, role, assignedLocations } = req.body;

        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const adminRegions = await UserRegion.find({ user: req.user._id }).select('region');
        const adminDistricts = await UserDistrict.find({ user: req.user._id }).select('district');
        const adminWards = await UserWard.find({ user: req.user._id }).select('ward');
        const adminVillages = await UserVillage.find({ user: req.user._id }).select('village');
        const adminSchools = await UserSchool.find({ user: req.user._id }).select('school');

        const isValidLocation = (locations, adminLocations) => {
            return locations.every(locationId => adminLocations.includes(locationId));
        };

        if (assignedLocations) {
            const { regions, districts, wards, villages, schools } = assignedLocations;

            if (regions && !isValidLocation(regions, adminRegions.map(loc => loc.region.toString()))) {
                return res.status(403).json({ msg: 'Assigned regions are outside your oversight.' });
            }

            if (districts && !isValidLocation(districts, adminDistricts.map(loc => loc.district.toString()))) {
                return res.status(403).json({ msg: 'Assigned districts are outside your oversight.' });
            }

            if (wards && !isValidLocation(wards, adminWards.map(loc => loc.ward.toString()))) {
                return res.status(403).json({ msg: 'Assigned wards are outside your oversight.' });
            }

            if (villages && !isValidLocation(villages, adminVillages.map(loc => loc.village.toString()))) {
                return res.status(403).json({ msg: 'Assigned villages are outside your oversight.' });
            }

            if (schools && !isValidLocation(schools, adminSchools.map(loc => loc.school.toString()))) {
                return res.status(403).json({ msg: 'Assigned schools are outside your oversight.' });
            }
        }

        user = new User({
            name,
            email,
            password: await bcrypt.hash(password, 10),
            role
        });

        await user.save();

        if (role !== 'admin' && assignedLocations) {
            const { regions, districts, wards, villages, schools } = assignedLocations;

            if (regions && regions.length) {
                regions.forEach(async regionId => {
                    await new UserRegion({ user: user._id, region: regionId }).save();
                });
            }

            if (districts && districts.length) {
                districts.forEach(async districtId => {
                    await new UserDistrict({ user: user._id, district: districtId }).save();
                });
            }

            if (wards && wards.length) {
                wards.forEach(async wardId => {
                    await new UserWard({ user: user._id, ward: wardId }).save();
                });
            }

            if (villages && villages.length) {
                villages.forEach(async villageId => {
                    await new UserVillage({ user: user._id, village: villageId }).save();
                });
            }

            if (schools && schools.length) {
                schools.forEach(async schoolId => {
                    await new UserSchool({ user: user._id, school: schoolId }).save();
                });
            }
        }

        res.status(201).json({ msg: 'User created successfully', user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const userId = req.user._id;

        // Fetch all location access for the user
        const regions = await UserRegion.find({ user: userId }).select('region');
        const districts = await UserDistrict.find({ user: userId }).select('district');
        const wards = await UserWard.find({ user: userId }).select('ward');
        const villages = await UserVillage.find({ user: userId }).select('village');
        const schools = await UserSchool.find({ user: userId }).select('school');

        // Query users based on location access
        const users = await User.find({
            $or: [
                { 'assignedLocations.regions': { $in: regions.map(loc => loc.region) } },
                { 'assignedLocations.districts': { $in: districts.map(loc => loc.district) } },
                { 'assignedLocations.wards': { $in: wards.map(loc => loc.ward) } },
                { 'assignedLocations.villages': { $in: villages.map(loc => loc.village) } },
                { 'assignedLocations.schools': { $in: schools.map(loc => loc.school) } }
            ]
        }).select('-password');

        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const { name, email, role } = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, { name, email, role }, { new: true }).select('-password');
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.json({ msg: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };
