"use strict";
const langs = [
  {
    value: "en",
    country: "US",
    direction: "ltr",
  },
  {
    value: "ar",
    country: "EG",
    direction: "rtl",
  },
  {
    value: "de",
    country: "Germany",
    direction: "ltr",
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
