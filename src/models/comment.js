'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
   
    static associate(models) {
      Comment.belongsTo(models.User, {foreignKey: 'userId', targetKey: 'id'})
      Comment.belongsTo(models.Ticket, {foreignKey: 'ticketId', targetKey: 'id'})
      Comment.hasMany(models.CommentImage, {foreignKey: 'commentId'})
    }
  }
  Comment.init({
    userId: DataTypes.BIGINT,
    ticketId: DataTypes.BIGINT,
    comment: DataTypes.TEXT,
    rating: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};