const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcryptjs')

// Load Models
const { Region } = require('./models/region');
const { District } = require('./models/district');
const { Ward } = require('./models/ward');
const { Village } = require('./models/village');
const { School } = require('./models/schools');
const { User } = require('./models/user');
const { Role } = require('./models/roles');
const { Permission } = require('./models/permissions');
const { FoodType } = require('./models/food_type');
const { SchoolYearlyData } = require('./models/school_yearly_data');
const { FoodContribution } = require('./models/food_contribution');
const { FoodDistribution } = require('./models/food_distribution');
const { Meeting } = require('./models/meeting');
const { Challenge } = require('./models/challenge');
const { ChallengeMileStone } = require('./models/challenge_milestone');
const { SchoolInventory } = require('./models/school_inventory');
const { UserSchool } = require('./models/user_schools');
const { UserRegion } = require('./models/user_region');
const { UserDistrict } = require('./models/user_district');
const { UserWard } = require('./models/user_ward');
const { UserVillage } = require('./models/user_village');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

const initializeDatabase = async () => {
    await connectDB();

    try {
        // Clear existing data
        await Region.deleteMany({});
        await District.deleteMany({});
        await Ward.deleteMany({});
        await Village.deleteMany({});
        await School.deleteMany({});
        await User.deleteMany({});
        await Role.deleteMany({});
        await Permission.deleteMany({});
        await FoodType.deleteMany({});
        await SchoolYearlyData.deleteMany({});
        await FoodContribution.deleteMany({});
        await FoodDistribution.deleteMany({});
        await Meeting.deleteMany({});
        await Challenge.deleteMany({});
        await ChallengeMileStone.deleteMany({});
        await SchoolInventory.deleteMany({});
        await UserRegion.deleteMany({});
        await UserDistrict.deleteMany({});
        await UserWard.deleteMany({});
        await UserVillage.deleteMany({});
        await UserSchool.deleteMany({});

        console.log('Existing data cleared');

        // Seed initial data (example)
        const region = new Region({ name: 'Mara' });
        await region.save();

        const district = new District({ name: 'Bunda DC', region: region._id });
        await district.save();

        const ward = new Ward({ name: 'Butimba', district: district._id });
        await ward.save();

        const village = new Village({ name: 'Bulemba', ward: ward._id });
        await village.save();

        const school = new School({
            name: 'Bulemba Primary School',
            village: village._id,
            ward: ward._id,
            district: district._id,
            region: region._id,
            total_students: 100
        });
        await school.save();

        const foodType = new FoodType({ name: 'Maize', description: 'A staple food' });
        await foodType.save();

        console.log('Initial data seeded');

        // Example of creating an admin user
        const adminRole = new Role({ name: 'admin' });
        await adminRole.save();

        const adminUser = new User({
            name: 'Admin User',
            email: 'admin@example.com',
            password: await bcrypt.hash('123', 10),
            role: adminRole._id
        });
        await adminUser.save();

        console.log('Admin user created');

        process.exit(0);
    } catch (err) {
        console.error('Error initializing database:', err.message);
        process.exit(1);
    }
};

initializeDatabase();
