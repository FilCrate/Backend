'use strict';
module.exports = (sequelize, DataTypes) => {
  var Reviews = sequelize.define('Reviews', {
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    rating: DataTypes.DECIMAL
  }, {});
  Reviews.associate = function(models) {
    // associations can be defined here
  };
  return Reviews;
};