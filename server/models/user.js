"use strict";
const { Model } = require("sequelize");
export default (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association
      this.hasMany(models.Feed, {
        onDelete: "CASCADE",
      });
      this.hasMany(models.Lang, {
        onDelete: "CASCADE",
      });
      this.belongsTo(models.Role, {
        onDelete: "SET NULL",
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      bio: DataTypes.STRING,
      avatar: DataTypes.STRING,
      password: DataTypes.STRING,
      RoleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
