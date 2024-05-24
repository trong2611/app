
'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TicketCategory extends Model {
   
    static associate(models) {
      TicketCategory.belongsTo(models.Ticket, {foreignKey: 'ticketId', targetKey: 'id'})
      TicketCategory.belongsTo(models.Category, {foreignKey: 'categoryId', targetKey: 'id'})
    }
  }
  TicketCategory.init({
    ticketId: DataTypes.BIGINT,
    categoryId: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'TicketCategory',
  });
  return TicketCategory;
};