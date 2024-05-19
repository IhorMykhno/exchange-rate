const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Subscriber extends Model {}
  Subscriber.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Subscriber",
      tableName: "subscribers",
      timestamps: true,
    }
  );

  return Subscriber;
};
