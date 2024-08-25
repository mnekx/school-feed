const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');

class Permission extends Model {}

Permission.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Permission'
});

module.exports = Permission;
