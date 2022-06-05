"use strict";
const { Model } = require("sequelize");
export default (sequelize, DataTypes) => {
  class NewsCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Feed, {
        onDelete: "CASCADE",
      });
    }
  }
  NewsCategory.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "NewsCategory",
    }
  );
  return NewsCategory;
};
