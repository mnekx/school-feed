const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');

class SchoolInventory extends Model {}

SchoolInventory.init({
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
            model: 'FoodType',
            key: 'id'
        }
    },
    current_stock_kg: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    last_updated: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_by: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'SchoolInventory'
});

module.exports = SchoolInventory;
