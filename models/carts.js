'use strict';
module.exports = (sequelize, DataTypes) => {
  var Carts = sequelize.define('Carts', {
    username: DataTypes.STRING,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  Carts.associate = function(models) {
    // associations can be defined here
  };
  return Carts;
};