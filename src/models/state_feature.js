
'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StateFeature extends Model {
   
    static associate(models) {
      StateFeature.belongsTo(models.Feature, {foreignKey: 'featureId', targetKey: 'id'})
      StateFeature.belongsTo(models.State, {foreignKey: 'stateId', targetKey: 'id'})
    }
  }
  StateFeature.init({
    stateId: DataTypes.BIGINT,
    featureId: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'StateFeature',
  });
  return StateFeature;
};