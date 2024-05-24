
'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TicketTimeline extends Model {
   
    static associate(models) {
      TicketTimeline.belongsTo(models.TimeLine, {foreignKey: 'timlineId', targetKey: 'id'})
      TicketTimeline.belongsTo(models.SubTicket, {foreignKey: 'subTicketId', targetKey: 'id'})
    }
  }
  TicketTimeline.init({
    subTicketId: DataTypes.BIGINT,
    timlineId: DataTypes.BIGINT,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TicketTimeline',
  });
  return TicketTimeline;
};