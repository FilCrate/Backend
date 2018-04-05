'use strict';
module.exports = (sequelize, DataTypes) => {
  var reviews = sequelize.define('reviews', {
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    rating: DataTypes.DECIMAL
  }, {});
  reviews.associate = function(models) {
    // associations can be defined here
  };
  return reviews;
};