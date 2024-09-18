'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    tableName: 'roles',
  });

  Role.associate = function(models) {
    Role.belongsToMany(models.User, { through: 'UserRole', foreignKey: 'roleId' });
    Role.belongsToMany(models.Privilege, { through: 'UserRolePrivilege', foreignKey: 'roleId' });
  };

  return Role;
};
