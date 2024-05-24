
'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TicketDiscount extends Model {
   
    static associate(models) {
      TicketDiscount.belongsTo(models.Discount, {foreignKey: 'discountId', targetKey: 'id'})
      TicketDiscount.belongsTo(models.Ticket, {foreignKey: 'ticketId', targetKey: 'id'})
    }
  }
  TicketDiscount.init({
    ticketId: DataTypes.BIGINT,
    discountId: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'TicketDiscount',
  });
  return TicketDiscount;
};