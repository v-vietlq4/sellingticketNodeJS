/* jshint indent: 2 */
const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
  const seat_prices = sequelize.define(
    "seat_prices",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      room_type_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: "room_types",
          key: "id"
        }
      },
      seat_type_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: "seat_types",
          key: "id"
        }
      },
      price: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      tableName: "seat_prices"
    }
  );
  
  return seat_prices;
};
