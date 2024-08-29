const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');

class FoodType extends Model {}

FoodType.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'FoodType'
});

module.exports = FoodType;
