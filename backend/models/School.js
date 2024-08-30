const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');

class School extends Model {}

School.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    villageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Villages',
            key: 'id'
        }
    },
    wardId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Wards',
            key: 'id'
        }
    },
    districtId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Districts',
            key: 'id'
        }
    },
    regionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Regions',
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'School'
});

module.exports = School;
