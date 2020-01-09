/* jshint indent: 2 */
const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
  const seat_cols = sequelize.define(
    "seat_cols",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      seat_row_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: "seat_rows",
          key: "id"
        }
      },
      status: {
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
      tableName: "seat_cols"
    }
  );
  
  return seat_cols;
};
