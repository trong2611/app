'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TicketImage extends Model {
   
    static associate(models) {
      TicketImage.belongsTo(models.Ticket, {foreignKey:'ticketId', targetKey: 'id'})
    }
  }
  TicketImage.init({
    image: DataTypes.STRING,
    status: DataTypes.STRING,
    ticketId: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'TicketImage',
  });
  return TicketImage;
};