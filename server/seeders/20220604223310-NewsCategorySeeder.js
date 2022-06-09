"use strict";
const newsCategories = [
  {
    name: "Unveristy",
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    name: "Faculty of Engineering",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Faculty of Science",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Faculty of Arts",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Faculty of Business",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Faculty of Medicine",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Faculty of Dentistry",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Faculty of Pharmacy",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Faculty of Nursing",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Faculty of Commerce",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Faculty of Law",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Faculty of Computer Science",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Faculty of Architecture",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Faculty of Economics",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Faculty of Education",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Faculty of Literature",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Faculty of Social Sciences",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Faculty of Veterinary Medicine",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Faculty of Veterinary Science",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("NewsCategories", newsCategories, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("NewsCategories", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
