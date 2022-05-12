"use strict";
const permissions = [
  {
    name: "manage news",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "manage users",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "manage roles",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "manage events",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Permissions", permissions, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Permissions", permissions);
  },
};
