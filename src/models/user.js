'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {
      User.belongsTo(models.Role, {foreignKey: 'roleId', targetKey: 'id'});
      User.hasMany(models.Like, {foreignKey: 'userId'})
      // User.hasMany(models.Rating, {foreignKey: 'userId'})
      User.hasMany(models.Comment, {foreignKey: 'userId'})
      User.hasMany(models.Booking, {foreignKey: 'userId'})
      User.hasMany(models.ViewHistory, {foreignKey: 'userId'})
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    image: DataTypes.STRING,
    roleId: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};