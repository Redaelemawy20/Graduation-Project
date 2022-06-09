"use strict";
const langs = [
  {
    value: "en",
    country: "US",
    direction: "ltr",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    value: "ar",
    country: "EG",
    direction: "rtl",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    value: "de",
    country: "Germany",
    direction: "ltr",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Langs", langs, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Langs", langs);
  },
};
