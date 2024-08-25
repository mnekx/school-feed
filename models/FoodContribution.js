const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');

class FoodContribution extends Model {}

FoodContribution.init({
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
    contribution_date: {
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
    modelName: 'FoodContribution'
});

module.exports = FoodContribution;
