'use strict';
module.exports = (sequelize, DataTypes) => {
  var products = sequelize.define('products', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER,
    rating: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    category: DataTypes.STRING,
    wieght: DataTypes.DECIMAL,
    sku: DataTypes.STRING
  }, {});
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};