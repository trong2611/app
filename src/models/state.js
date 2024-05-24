
'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
   
    static associate(models) {
      State.hasMany(models.StateFeature, {foreignKey: 'stateId'})
      State.belongsTo(models.Country, {foreignKey: 'countryId', targetKey: 'id'})
      State.hasMany(models.Ticket, {foreignKey: 'stateId'})
    }
  }
  State.init({
    name: DataTypes.STRING,
    countryId: DataTypes.BIGINT,
    map: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'State',
  });
  return State;
};