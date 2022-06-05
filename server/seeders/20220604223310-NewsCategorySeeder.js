"use strict";
const newsCategories = [
  {
    name: "Unveristy",
  },

  {
    name: "Faculty of Engineering",
  },
  {
    name: "Faculty of Science",
  },
  {
    name: "Faculty of Arts",
  },
  {
    name: "Faculty of Business",
  },
  {
    name: "Faculty of Medicine",
  },
  {
    name: "Faculty of Dentistry",
  },
  {
    name: "Faculty of Pharmacy",
  },
  {
    name: "Faculty of Nursing",
  },
  {
    name: "Faculty of Commerce",
  },
  {
    name: "Faculty of Law",
  },
  {
    name: "Faculty of Computer Science",
  },
  {
    name: "Faculty of Architecture",
  },
  {
    name: "Faculty of Economics",
  },
  {
    name: "Faculty of Education",
  },
  {
    name: "Faculty of Literature",
  },
  {
    name: "Faculty of Social Sciences",
  },
  {
    name: "Faculty of Veterinary Medicine",
  },
  {
    name: "Faculty of Veterinary Science",
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
