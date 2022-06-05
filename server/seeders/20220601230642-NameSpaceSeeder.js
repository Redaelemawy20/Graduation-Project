"use strict";
const nameSpaces = [
  {
    value: "translations",
    description: "Translations",
  },
  {
    value: "header",
    description: "Header",
  },
  {
    value: "news",
    description: "News",
  },
];
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("NameSpaces", nameSpaces, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("NameSpaces", nameSpaces);
  },
};
