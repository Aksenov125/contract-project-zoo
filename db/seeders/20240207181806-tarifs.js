"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Tarifs", [
      {
        price: "500р",
        day: "Будни",
        age: "Взрослый",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price: "300р",
        day: "Будни",
        age: "Детский",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price: "700р",
        day: "Выходные",
        age: "Взрослый",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        price: "500р",
        day: "Выходные",
        age: "Детский",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tarifs", null, {});
  },
};
