'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    
    static associate({Img, Comment}) {
      this.hasMany(Img, {foreignKey: 'animalId'})
      this.hasMany(Comment, {foreignKey: 'animalId'})
    }
  }
  Animal.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};