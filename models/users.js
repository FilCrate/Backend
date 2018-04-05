'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('Users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.CHAR
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};