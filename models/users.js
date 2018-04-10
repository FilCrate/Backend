'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.CHAR
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};