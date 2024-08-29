const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');

class Challenge extends Model {}

Challenge.init({
    schoolId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Schools',
            key: 'id'
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    current_status: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Challenge'
});

module.exports = Challenge;
