const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');

class Role extends Model {}

Role.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    modelName: 'Role'
});


module.exports = Role;
