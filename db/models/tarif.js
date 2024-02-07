'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarif extends Model {
    
    static associate(models) {
      
    }
  }
  Tarif.init({
    price: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    day: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    age: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Tarif',
  });
  return Tarif;
};