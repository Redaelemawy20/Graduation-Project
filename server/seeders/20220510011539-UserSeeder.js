"use strict";
const bcrypt = require("bcryptjs");
async function users() {
  return (users = [
    {
      name: "superadmin",
      email: "superadmin@mu.com",
      password: await bcrypt.hash("password", 10),
      bio: "Full Stack Developer",
      RoleId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "admin",
      email: "admin@mu.com",
      password: await bcrypt.hash("password", 10),
      bio: "Doctor",
      RoleId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "user",
      email: "user@mu.com",
      password: await bcrypt.hash("password", 10),
      RoleId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Dr Hatem",
      email: "hatem@mu.com",
      password: await bcrypt.hash("password", 10),
      RoleId: 2,
      bio: "Ahlawy \n Hala Madrid ... 85:45",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", await users(), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", await users());
  },
};
