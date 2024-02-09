"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Imgs",
      [
        {
          url: "https://99px.ru/sstorage/53/2011/04/mid_13661_5863.jpg",
          animalId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "https://99px.ru/sstorage/53/2012/09/tmb_50569_2665.jpg",
          animalId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "https://wildfauna.ru/wp-content/uploads/2019/04/vodyanoj-olen-5.jpg",
          animalId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "https://avatars.dzeninfra.ru/get-zen_doc/1222645/pub_61e2dc2fe7cefe2bd738fc48_61e2dc4d15f07d595f566968/scale_1200",
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
          url: "https://www.amur.life/res/news/51617/928x_/0458b73759b9ccc328c58de8a06a10c6.jpg",
          animalId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "https://hi-news.ru/wp-content/uploads/2014/03/Goat.jpg",
          animalId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          url: "https://img.gazeta.ru/files3/649/12408649/Depositphotos_5344901_l-2015-pic4_zoom-1500x1500-48370.jpg",
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
          url: "https://lh3.googleusercontent.com/proxy/fwjPPqQ9z99DWeE2geAqwDSvOEUgI9yvqXt4VVi14KsWzC9-xzCUWvExDOaFU7JIXiwx5YPbUTSZmVs-H8Ogxn4JqTNOE66EA_Cx3sMO1f7L",
          animalId: 7,
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
          url: "/img/Sultan1.jpg",
          animalId: 10,
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
          url: "/img/Anya1.jpg",
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
        
      ],
      
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Imgs", null, {});
  },
};
