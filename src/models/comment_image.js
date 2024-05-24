'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommentImage extends Model {
   
    static associate(models) {
      CommentImage.belongsTo(models.Comment, {foreignKey: 'commentId', targetKey: 'id'})
    }
  }
  CommentImage.init({
    image: DataTypes.STRING,
    status: DataTypes.STRING,
    commentId: DataTypes.BIGINT,
  }, {
    sequelize,
    modelName: 'CommentImage',
  });
  return CommentImage;
};