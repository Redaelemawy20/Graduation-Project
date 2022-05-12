"use strict";
const { Model } = require("sequelize");
export default (sequelize, DataTypes) => {
  class File extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Feed, {
        onDelete: "CASCADE",
      });
    }
  }
  File.init(
    {
      name: DataTypes.STRING,
      originalname: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "File",
    }
  );
  return File;
};
