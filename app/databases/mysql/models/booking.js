/* jshint indent: 2 */

const Car = require("./car");
const User = require("./user");

module.exports = function (sequelize, DataTypes) {
  const Booking = sequelize.define(
    "booking",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "id",
      },
      from: {
        type: DataTypes.DATE(6),
        allowNull: false,
        field: "from",
      },
      to: {
        type: DataTypes.DATE(6),
        allowNull: false,
        field: "to",
      },
      hours: {
        type: DataTypes.FLOAT(11),
        allowNull: false,
        field: "price_per_hour",
      },
      price: {
        type: DataTypes.FLOAT(11),
        allowNull: false,
        field: "security_deposit",
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        field: "updated_at",
      },
    },
    {
      tableName: "booking",
      timestamps: true,
    }
  );
  return Booking;
};
