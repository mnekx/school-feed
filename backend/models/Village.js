const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');

class Village extends Model {}

Village.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    wardId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Wards',
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Village'
});

module.exports = Village;
