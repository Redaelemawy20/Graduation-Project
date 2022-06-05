"use strict";
const { Model } = require("sequelize");
export default (sequelize, DataTypes) => {
  class NameSpace extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NameSpace.init(
    {
      value: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "NameSpace",
    }
  );
  return NameSpace;
};
