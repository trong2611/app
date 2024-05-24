'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubTicket extends Model {
   
    static associate(models) {
        SubTicket.hasMany(models.Price, {foreignKey: 'subTicketId'})
        SubTicket.hasMany(models.TicketTimeline, {foreignKey: 'subTicketId'})
        SubTicket.hasMany(models.BookingDetail, {foreignKey: 'subTicketId'})
        SubTicket.belongsTo(models.Ticket, {foreignKey: 'ticketId', targetKey: 'id'})
    }
  }
  SubTicket.init({
    name: DataTypes.STRING,
    ticketId: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'SubTicket',
  });
  return SubTicket;
};


