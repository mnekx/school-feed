'use strict';
module.exports = (sequelize, DataTypes) => {
  const Privilege = sequelize.define('Privilege', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    controller: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
  }, {
    tableName: 'privileges',
  });

  Privilege.associate = function(models) {
    Privilege.belongsToMany(models.Role, { through: 'UserRolePrivilege', foreignKey: 'privilegeId' });
  };

  return Privilege;
};
