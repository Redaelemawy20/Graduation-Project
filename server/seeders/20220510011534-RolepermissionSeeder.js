"use strict";

// const { default: permission } = require("../models/permission");

// let Role = db.Role.first();

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(
      "select * from roles where id = 1",
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const superAdmin = users[0];
    const permissions = await queryInterface.sequelize.query(
      "select * from permissions",
      {
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const rolespermissions = [];
    for (let permission of permissions) {
      rolespermissions.push({
        RoleId: superAdmin.id,
        PermissionId: permission.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert("RolePermissions", rolespermissions, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      "delete from rolespermissions where RoleId = 1",
      {
        type: queryInterface.sequelize.QueryTypes.DELETE,
      }
    );
  },
};
