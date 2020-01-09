/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const rooms = sequelize.define(
    "rooms",
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
      name: {
        type: DataTypes.STRING(255),
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
      tableName: "rooms"
    }
  );
  return rooms;
}