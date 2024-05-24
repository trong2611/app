
'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TimeLine extends Model {
   
    static associate(models) {
      TimeLine.hasMany(models.TicketTimeline, {foreignKey: 'timlineId'})
    }
  }
  TimeLine.init({
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'TimeLine',
  });
  return TimeLine;
};