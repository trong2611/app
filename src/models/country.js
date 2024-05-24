
'use strict';
const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
   
    static associate(models) {
      Country.hasMany(models.State, {foreignKey: 'countryId'})
    }
  }
  Country.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Country',
  });
  return Country;
};