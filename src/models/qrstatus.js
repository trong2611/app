'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QRStatus extends Model {
   
    static associate(models) {
      QRStatus.hasMany(models.BookingDetail, {foreignKey: 'qrStatusId'})
    }
  }
  QRStatus.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'QRStatus',
  });
  return QRStatus;
};