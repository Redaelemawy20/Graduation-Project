const Sequelize = require("sequelize");
const database = require("../../services/db_connection");
const Feed = database.define("feed", {
  id: {
    type: Sequelize.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  feed_id: {
    type: Sequelize.STRING,
    unique: true,
  },
  title: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.TEXT,
  },
  auther: {
    type: Sequelize.BIGINT,
  },
  show: {
    type: Sequelize.BOOLEAN,
  },
  mainImage: {
    type: Sequelize.STRING,
  },
});
module.exports = Feed;
