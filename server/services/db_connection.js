const Sequelize = require("sequelize");
const keys = require("../config/keys");
const connection = new Sequelize(keys.dbName, keys.dbUser, keys.dbPassword, {
  dialect: "mysql",
  host: keys.dbHost,
});

module.exports = connection;
