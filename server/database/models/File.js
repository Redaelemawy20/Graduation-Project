const Sequelize = require("sequelize");
const database = require("../../services/db_connection");
const File = database.define("File", {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  filename: {
    type: Sequelize.STRING,
  },
  originalname: {
    type: Sequelize.STRING,
  },
  feed_id: {
    type: Sequelize.BIGINT,
  },
});
module.exports = File;
