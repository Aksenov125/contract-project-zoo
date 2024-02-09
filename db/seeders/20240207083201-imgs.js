"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Imgs",
      [
        {
          url: "https://lh3.googleusercontent.com/proxy/pV-zynjC91OZ_rtWACLHwTMr47gONnbTUW0bpSrK717zSjJe0_Q5Cfvegz3SMOT6NEYeQdBYe-XwvbisvE1-chiki8Kmx_TL",
          animalId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Rothschild%27s_Giraffe_%28Giraffa_camelopardalis_rothschildi%29_male_%287068054987%29%2C_crop_%26_edit.jpg/800px-Rothschild%27s_Giraffe_%28Giraffa_camelopardalis_rothschildi%29_male_%287068054987%29%2C_crop_%26_edit.jpg",
          animalId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "https://zoopark-vl.ru/wp-content/uploads/2022/12/pyatnistyj-olen-12.jpg",
          animalId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "https://zoopark-vl.ru/wp-content/uploads/2022/12/pyatnistyj-olen-14.jpg",
          animalId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "https://lionspark.ru/wp-content/uploads/2023/03/amurskij-tigr-32.webp",
          animalId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "https://o-prirode.ru/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/09/Tigers_Grass_565301_2048x2732-1.jpg.webp",
          animalId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "https://zoopark-vl.ru/wp-content/uploads/2022/12/kamerunskaya-koza-5-rotated.jpg",
          animalId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "https://zoopark-vl.ru/wp-content/uploads/2022/12/kamerunskaya-koza-6-rotated.jpg",
          animalId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "https://o-prirode.ru/wp-content/uploads/2018/10/gibridsvini.jpg",
          animalId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "https://static.mk.ru/upload/entities/2023/05/30/12/articles/detailPicture/6e/b9/9a/c7/341e411ffc8b634be43509343ab3b8b0.jpg",
          animalId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "https://catalog.detmir.st/media/jrLIUlprYOorncVTBUF0ELRItOf2TaCKWGJ7Bg5ZkVY=?preset=site_product_gallery_r1500",
          animalId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "/img/vadim2.jpg",
          animalId: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "/img/vadim1.jpg",
          animalId: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "/img/vadim3.jpg",
          animalId: 11,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "/img/Sultan2.jpg",
          animalId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "/img/Sultan1.jpg",
          animalId: 10,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "/img/Anya1.jpeg",
          animalId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "/img/Anya2.jpg",
          animalId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "/img/Vova1.jpg",
          animalId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "/img/Vova2.jpg",
          animalId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "/img/Sasha1.jpg",
          animalId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "/img/Sasha2.jpg",
          animalId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "/img/Aleks1.jpg",
          animalId: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        
      ],
      
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Imgs", null, {});
  },
};
