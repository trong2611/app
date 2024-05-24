'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
   
    static associate(models) {
      Ticket.hasMany(models.Like, {foreignKey: 'ticketId'})
      // Ticket.hasMany(models.Rating, {foreignKey: 'ticketId'})
      Ticket.hasMany(models.Comment, {foreignKey: 'ticketId'})
      Ticket.belongsTo(models.State, {foreignKey: 'stateId', targetKey: 'id'})
      Ticket.hasMany(models.TicketDiscount, {foreignKey: 'ticketId'})
      Ticket.hasMany(models.Schedule, {foreignKey: 'ticketId'})
      Ticket.hasMany(models.DetailDescription, {foreignKey: 'ticketId'})
      Ticket.hasMany(models.SubTicket, {foreignKey: 'ticketId'})
      // Ticket.hasMany(models.TicketTimeline, {foreignKey: 'ticketId'})
      Ticket.hasMany(models.TicketImage, {foreignKey: 'ticketId'})
      Ticket.hasMany(models.BookingDetail, {foreignKey: 'ticketId'})
      Ticket.hasMany(models.ViewHistory, {foreignKey: 'ticketId'})
    }
  }
  Ticket.init({
    name: DataTypes.STRING,
    departureAddress: DataTypes.STRING,
    destinationAddress: DataTypes.STRING,
    note: DataTypes.TEXT,
    description: DataTypes.TEXT,
    ticketTypeId: DataTypes.BIGINT,
    address: DataTypes.STRING,
    stateId: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};


