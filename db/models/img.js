'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Img extends Model {
    
    static associate({Animal}) {
      this.belongsTo(Animal, {foreignKey: 'animalId'})
  
    }
  }
  Img.init({
    url: {
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
    modelName: 'Img',
  });
  return Img;
};