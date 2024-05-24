'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Price extends Model {
   
    static associate(models) {
        Price.belongsTo(models.SubTicket, {foreignKey: 'subTicketId', targetKey: 'id'})
    }
  }
  Price.init({
    type: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    subTicketId: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Price',
  });
  return Price;
};


