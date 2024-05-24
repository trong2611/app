
'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailDescription extends Model {
   
    static associate(models) {
      DetailDescription.belongsTo(models.Ticket, {foreignKey: 'ticketId', targetKey: 'id'})
    }
  }
  DetailDescription.init({
    note: DataTypes.TEXT,
    image: DataTypes.STRING,
    ticketId: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'DetailDescription',
  });
  return DetailDescription;
};