const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');

class Meeting extends Model {}

Meeting.init({
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    agenda: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Meeting'
});

module.exports = Meeting;
