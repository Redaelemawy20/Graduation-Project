const Sequelize = require("sequelize");
const database = require("../../services/db_connection");
const User = database.define("User", {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "admin@menofia.com",
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "12345",
  },
});
console.log(User === database.models.User);
module.exports = User;
