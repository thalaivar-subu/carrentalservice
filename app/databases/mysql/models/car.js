/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  const Car = sequelize.define(
    "Car",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "id",
      },
      car_license_number: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: "car_license_number",
        unique: true,
      },
      manufacturer: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: "manufacturer",
      },
      base_price: {
        type: DataTypes.FLOAT(11),
        allowNull: false,
        field: "base_price",
      },
      price_per_hour: {
        type: DataTypes.FLOAT(11),
        allowNull: false,
        field: "price_per_hour",
      },
      security_deposit: {
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
      tableName: "car",
      timestamps: true,
    }
  );

  return Car;
};
