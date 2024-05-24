
'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
   
    static associate(models) {
      Schedule.belongsTo(models.Ticket, {foreignKey: 'ticketId', targetKey: 'id'})
    }
  }
  Schedule.init({
    time: DataTypes.TIME,
    note: DataTypes.TEXT,
    image: DataTypes.STRING,
    ticketId: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};