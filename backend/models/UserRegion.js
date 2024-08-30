const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./User');
const Region = require('./Region');

class UserRegion extends Model {}

UserRegion.init({
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    regionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Region,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'UserRegion',
    tableName: 'user_regions',
    timestamps: false
});

module.exports = UserRegion;
