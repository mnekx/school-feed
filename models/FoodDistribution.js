const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');

class FoodDistribution extends Model {}

FoodDistribution.init({
    schoolId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Schools',
            key: 'id'
        }
    },
    foodTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'FoodTypes',
            key: 'id'
        }
    },
    quantity_kg: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    distribution_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    verified_by: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'FoodDistribution'
});

module.exports = FoodDistribution;
