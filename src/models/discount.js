
'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Discount extends Model {
   
    static associate(models) {
      Discount.hasMany(models.TicketDiscount, {foreignKey: 'discountId'})
    }
  }
  Discount.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    discountRate: DataTypes.DOUBLE,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Discount',
  });
  return Discount;
};