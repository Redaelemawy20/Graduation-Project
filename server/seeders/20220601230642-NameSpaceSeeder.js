"use strict";
const nameSpaces = [
  {
    value: "translations",
    description: "Translations",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    value: "header",
    description: "Header",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    value: "news",
    description: "News",
    createdAt: new Date(),
    updatedAt: new Date(),
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
