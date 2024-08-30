const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');

class District extends Model {}

District.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    regionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Regions', // References the 'Region' model
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'District'
});

module.exports = District;
