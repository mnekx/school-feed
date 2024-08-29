const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');
const RolePermission = require('./RolePermission');

class Privilege extends Model {}

Privilege.init({
    rolePermissionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: RolePermission,
            key: 'id'
        }
    },
    entityName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    action: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Privilege',
    tableName: 'privileges',
    timestamps: false
});

module.exports = Privilege;
