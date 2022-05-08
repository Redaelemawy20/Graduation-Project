const Sequelize = require("sequelize");
const database = require("../../services/db_connection");
const File = database.define("file", {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  originalname: {
    type: Sequelize.STRING,
  },
});
module.exports = File;
