const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');
const User = require('./User');
const Ward = require('./Ward');

class UserWard extends Model {}

UserWard.init({
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    wardId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Ward,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'UserWard',
    tableName: 'user_wards',
    timestamps: false
});

module.exports = UserWard;
