const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');

class Region extends Model {}

Region.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    modelName: 'Region'
});

module.exports = Region;
