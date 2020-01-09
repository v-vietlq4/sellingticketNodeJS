/* jshint indent: 2 */
const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
  const items = sequelize.define(
    "items",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      
      name: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      price: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      }, 
      note: {
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
      tableName: "items"
    }
  );
  
  return items;
};
