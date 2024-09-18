'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserRolePrivilege = sequelize.define('UserRolePrivilege', {
    roleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'roles',
        key: 'id',
      },
    },
    privilegeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'privileges',
        key: 'id',
      },
    },
  }, {
    tableName: 'user_role_privileges',
  });

  return UserRolePrivilege;
};
