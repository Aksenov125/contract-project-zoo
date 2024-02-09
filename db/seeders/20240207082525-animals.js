'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Animals', [
      {
       name: 'Жираф',
       description: 'Пятнистый',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      name: 'Олень',
      description: 'Усатый',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Тигр',
      description: 'Красивый',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Коза',
      description: 'Рогатая',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Свинья',
      description: 'Грязная',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Попугай',
      description: 'Певучий',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Упоротая лиса Аня',
      description: 'На ретроспективе в пятницу',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Бородатый дельфин',
      description: 'Злой',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Хамелеон',
      description: 'В любой непонятной ситуации меняет окрас с белого на красный',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Кот в сапогах',
      description: 'Большой и добрый',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Мышь',
      description: 'В тильте',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Осел',
      description: 'Необыный смех, щекочащий ушки',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
    
     await queryInterface.bulkDelete('Animals', null, {});
     
  }
};
