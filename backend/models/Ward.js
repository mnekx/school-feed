const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');

class Ward extends Model {}

Ward.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    districtId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Districts',
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Ward'
});

module.exports = Ward;
