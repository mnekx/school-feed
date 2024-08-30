const Role = require('./Role');
const Permission = require('./Permission');
const RolePermission = require('./RolePermission');

// Define the many-to-many relationship
Role.belongsToMany(Permission, {
  through: RolePermission,
  foreignKey: 'roleId',
});

// Define the many-to-many relationship
Permission.belongsToMany(Role, {
  through: RolePermission,
  foreignKey: 'permissionId',
});

module.exports = { Role, Permission };
