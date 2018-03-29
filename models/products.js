'use strict';
module.exports = (sequelize, DataTypes) => {
  var Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    image: DataTypes.BLOB,
    price: DataTypes.DECIMAL,
    rating: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    category: DataTypes.STRING,
    weight: DataTypes.DECIMAL
  }, {});
  Products.associate = function(models) {
    // associations can be defined here
  };
  return Products;
};