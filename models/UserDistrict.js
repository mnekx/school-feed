const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./User');
const District = require('./District');

class UserDistrict extends Model {}

UserDistrict.init({
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    districtId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: District,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'UserDistrict',
    tableName: 'user_districts',
    timestamps: false
});

module.exports = UserDistrict;
