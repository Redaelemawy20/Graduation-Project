"use strict";
const rols = [
  {
    name: "super admin",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Roles", rols, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", rols);
  },
};
