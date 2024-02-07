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
      name: 'Носуха',
      description: 'Милая и смешная',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
    
     await queryInterface.bulkDelete('Animals', null, {});
     
  }
};
