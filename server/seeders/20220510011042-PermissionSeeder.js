"use strict";
const permissions = [
  {
    name: "manage news",
    description:
      "This role grant permissions for viewing, editing and creating news",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "manage users",
    description:
      "This role grant permissions for viewing, editing and creating translations",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "manage roles",
    description:
      "This role grant permissions for viewing, editing and roles news",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "manage events",
    description:
      "This role grant permissions for viewing, editing and roles events",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "manage translations",
    description:
      "This role grant permissions for viewing, editing and roles events",
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
