'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Animals', [
      {
       name: 'Жираф',
       description: 'Пятнистый',
       picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Rothschild%27s_Giraffe_%28Giraffa_camelopardalis_rothschildi%29_male_%287068054987%29%2C_crop_%26_edit.jpg/1200px-Rothschild%27s_Giraffe_%28Giraffa_camelopardalis_rothschildi%29_male_%287068054987%29%2C_crop_%26_edit.jpg',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      name: 'Олень',
      description: 'Усатый',
      picture: 'https://thumb.tildacdn.com/tild6339-6461-4664-b031-663566333966/-/format/webp/_.jpg', 
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Тигр',
      description: 'Красивый',
      picture: 'https://зоопарк.екатеринбург.рф/upload/resize_cache/iblock/cf5/8h7ru2yw3si9d9ohc1fliky62jqjtt4e/1920_1800_1/Dzhuna_8657.JPG',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Коза',
      description: 'Рогатая',
      picture: 'https://i.bigenc.ru/resizer/resize?sign=KK5Qe8IMMjt03KQaVeIDUQ&filename=vault/633c4c099ac4d1806f688e528b8dfeb1.webp&width=1200',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Свинья',
      description: 'Грязная',
      picture: 'https://cdn.fishki.net/upload/post/2018/02/13/2511394/tn/svinya-porosnok-zagorod-kopyta-krupnyy-plan-lico-78678-1920x1200.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Попугай',
      description: 'Певучий',
      picture: 'https://avatars.dzeninfra.ru/get-zen_doc/1945957/pub_5d1dcadfef033f00ae246f29_5d1dcbd145e5d100aea5f3b6/scale_1200',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Носуха',
      description: 'Милая и смешная',
      picture: 'https://yar-zoo.ru/media/zoo/images/Nosuha_a40e9a3a547d636b3044b9174cd72ac9.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
    
     await queryInterface.bulkDelete('Animals', null, {});
     
  }
};
