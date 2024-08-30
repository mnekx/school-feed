const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./User');
const School = require('./School');

class UserSchool extends Model {}

UserSchool.init({
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    schoolId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: School,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'UserSchool',
    tableName: 'user_schools', // Explicitly specify the table name in the database
    timestamps: false // Disable timestamps if not needed
});

module.exports = UserSchool;
