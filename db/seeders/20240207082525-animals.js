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
      name: 'Пятнистый олень',
      description: 'Зимой избегает мест, где снеговой покров выше 45 см. Самки и молодняк держатся ниже по склонам, чем взрослые самцы, но последние также редко поднимаются выше 500 м над уровнем моря. Летом окраска красно-рыжая с белыми пятнами, зимой тускнеет. Длина тела 160—180 см, высота в холке 95—112 см, вес — 75—130 кг.',
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
      name: 'Камерунская коза',
      description: 'Камерунская коза – далеко не единственное название животного, поскольку в ряде западных стран её именуют гвинейским, камерунским или лугопастбищным гномом за счёт её роста. Также некоторые коренные народности Африки называют животное африканской, нигерийской или лесной козой.',
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
      description: '9:00-12:00 - Отрицание, 12:00-16:00 - Агрессия, 16:00-20:00 - Принятие',
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
      name: 'Ленивец',
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
