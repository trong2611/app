'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingDetail extends Model {
   
    static associate(models) {
      BookingDetail.belongsTo(models.QRStatus, {foreignKey: 'qrStatusId', targetKey: 'id'})
      BookingDetail.belongsTo(models.Ticket, {foreignKey: 'ticketId', targetKey: 'id'})
      BookingDetail.belongsTo(models.Booking, {foreignKey: 'bookingId', targetKey: 'id'})
    }
  }
  BookingDetail.init({
    ticketId: DataTypes.BIGINT,
    quantity: DataTypes.INTEGER,
    unitPrice: DataTypes.DOUBLE,
    totalPrice: DataTypes.DOUBLE,
    bookingId: DataTypes.BIGINT,
    qrCode: DataTypes.STRING,
    qrStatusId: DataTypes.TINYINT,
    validUntil: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'BookingDetail',
  });
  return BookingDetail;
};