'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.CHAR
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};