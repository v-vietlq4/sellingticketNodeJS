/* jshint indent: 2 */
const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
  const seat_rows = sequelize.define(
    "seat_rows",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      room_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: "rooms",
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
      row_name: {
        type: DataTypes.STRING(255),
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
      tableName: "seat_rows"
    }
  );
  
  return seat_rows;
};
