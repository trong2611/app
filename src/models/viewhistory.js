
'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ViewHistory extends Model {
   
    static associate(models) {
      ViewHistory.belongsTo(models.User, {foreignKey: 'userId', targetKey: 'id'})
      ViewHistory.belongsTo(models.Ticket, {foreignKey: 'ticketId', targetKey: 'id'})
    }
  }
  ViewHistory.init({
    userId: DataTypes.BIGINT,
    ticketId: DataTypes.BIGINT,
    viewAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ViewHistory',
  });
  return ViewHistory;
};