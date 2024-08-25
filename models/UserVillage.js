const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./User');
const Village = require('./Village');

class UserVillage extends Model {}

UserVillage.init({
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    villageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Village,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'UserVillage',
    tableName: 'user_villages',
    timestamps: false
});

module.exports = UserVillage;
