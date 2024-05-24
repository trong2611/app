'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
   
    static associate(models) {
      Like.belongsTo(models.User, {foreignKey: 'userId', targetKey: 'id'})
      Like.belongsTo(models.Ticket, {foreignKey: 'ticketId', targetKey: 'id'})
    }
  }
  Like.init({
    userId: DataTypes.BIGINT,
    ticketId: DataTypes.BIGINT,
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};