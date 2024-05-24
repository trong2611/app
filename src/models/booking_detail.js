'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingDetail extends Model {
   
    static associate(models) {
      BookingDetail.belongsTo(models.QRStatus, {foreignKey: 'qrStatusId', targetKey: 'id'})
      BookingDetail.belongsTo(models.SubTicket, {foreignKey: 'subTicketId', targetKey: 'id'})
      BookingDetail.belongsTo(models.Booking, {foreignKey: 'bookingId', targetKey: 'id'})
    }
  }
  BookingDetail.init({
    subTicketId: DataTypes.BIGINT,
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