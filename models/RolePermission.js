const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');
const Role = require('./Role');
const Permission = require('./Permission');

class RolePermission extends Model {}

RolePermission.init({
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Role,
            key: 'id'
        }
    },
    permissionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Permission,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'RolePermission',
    tableName: 'role_permissions',
    timestamps: false
});

module.exports = RolePermission;
