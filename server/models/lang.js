"use strict";
const { Model } = require("sequelize");
export default (sequelize, DataTypes) => {
  class Lang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        onDelete: "CASCADE",
      });
    }
  }
  Lang.init(
    {
      value: DataTypes.STRING,
      country: DataTypes.STRING,
      direction: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Lang",
    }
  );
  return Lang;
};
