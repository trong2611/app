'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingStatus extends Model {
   
    static associate(models) {
      BookingStatus.hasMany(models.Booking, {foreignKey: 'bookingStatusId'})
    }
  }
  BookingStatus.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BookingStatus',
  });
  return BookingStatus;
};