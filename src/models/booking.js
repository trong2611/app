'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
   
    static associate(models) {
      Booking.hasMany(models.BookingDetail, {foreignKey: 'bookingId'})
      Booking.belongsTo(models.BookingStatus, {foreignKey: 'bookingStatusId', targetKey: 'id'})
      Booking.belongsTo(models.User, {foreignKey: 'userId', targetKey: 'id'})
    }
  }
  Booking.init({
    userId: DataTypes.BIGINT,
    totalAmount: DataTypes.DOUBLE,
    note: DataTypes.STRING,
    bookingStatusId: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};