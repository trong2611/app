'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feature extends Model {
   
    static associate(models) {
      Feature.hasMany(models.StateFeature, {foreignKey: 'featureId'})
    }
  }
  Feature.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Feature',
  });
  return Feature;
};