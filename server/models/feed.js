"use strict";
const { Model } = require("sequelize");
export default (sequelize, DataTypes) => {
  class Feed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.File, {
        onDelete: "CASCADE",
      });
      this.belongsTo(models.User, {
        onDelete: "CASCADE",
      });
      this.belongsTo(models.NewsCategory, {
        onDelete: "CASCADE",
      });
    }
  }
  Feed.init(
    {
      feed_id: DataTypes.STRING,
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      show: DataTypes.BOOLEAN,
      mainImage: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Feed",
    }
  );

  return Feed;
};
