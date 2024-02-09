'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    
    static associate({Animal}) {
      this.belongsTo(Animal, {foreignKey: 'animalId'})
    }
  }
  Comment.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    comment: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    animalId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Animals',
        key: 'id',
        },
        onDelete: "Cascade"
    },
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};