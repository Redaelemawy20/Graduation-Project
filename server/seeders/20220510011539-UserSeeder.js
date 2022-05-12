"use strict";

const users = [
  {
    name: "superadmin",
    email: "superadmin@mu.com",
    password: "password",
    RoleId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "admin",
    email: "admin@mu.com",
    password: "password",
    RoleId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "user",
    email: "user@mu.com",
    password: "password",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", users);
  },
};
